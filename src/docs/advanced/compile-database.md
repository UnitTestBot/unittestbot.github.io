---
name: Compile database
route: /docs/cpp/advanced/compile-database
parent: Documentation
menu: Advanced
description: Describe how UTBotCpp obtain project structure information
---

# Compile database

When C/C++ project is opened in VS Code with UTBot plugin enabled, the plugin tries to obtain information about the
project structure. UTBot needs this information to create sourcesβ ASTs with clang-tooling and to rebuild the project in
LLVM IR. LLVM has a special format, designed to store project information (i.e. compilation database) β
[compile_commands.json](https://clang.llvm.org/docs/LibTooling.html). There are various ways to obtain
compile_commands.json:

* If a project is built with CMake, one can pass CMAKE_EXPORT_COMPILE_COMMANDS=ON option to it;
* One can run the [Bear tool](https://github.com/rizsotto/Bear). Bear is able to create compile_commands.json by
  analysing Makefile commands, hence, Bear can be used if make command can be applied to a project.

Unfortunately, compile_commands.json only contains information about compilation of individual source files. That is not
sufficient to determine function behaviour. Consider a function π, which calls a function π in its body, while π is
specified by an external symbol. The definition of π can be provided to π if an artifact containing π is linked with
the artifact containing π. If there are multiple functions π in the project, it is impossible to determine, which
function is used by π, with only compile commands. To find a solution, a new format was invented β link_commands.json.
It shares the way of representing data with compile_commands.json, but holds information from project link commands. A
link_commands.json example can be viewed bellow. With this information, it is easy to solve the mentioned problem β one
has to look up for a pair of artifacts containing π and π, which are linked together while the project builds. UTBot
needed to be able to retrieve both compile and link information from a project. The vast majority of C/C++ projects are
built with either CMake or Makefile build systems. UTBot supports both of these, using the following approach:

```json
[
  {
    "command": "/usr/bin/ar qc liblib.a CMakeFiles/lib.dir/file3.c.o",
    "directory": "c-example/build",
    "files": [
      "c-example/build/CMakeFiles/lib.dir/file3.c.o"
    ]
  },
  {
    "command": "clang -fuse-ld=gold CMakeFiles/exe2.dir/file4.c.o -o exe2  liblib.a",
    "directory": "c-example/build",
    "files": [
      "c-example/build/CMakeFiles/exe2.dir/file4.c.o",
      "c-example/build/liblib.a"
    ]
  },
  {
    "command": "/usr/bin/ar qc libhelper.a CMakeFiles/helper.dir/file1.c.o",
    "directory": "c-example/build",
    "files": [
      "c-example/build/CMakeFiles/helper.dir/file1.c.o"
    ]
  },
  {
    "command": "clang -fuse-ld=gold CMakeFiles/exe1.dir/file2.c.o -o exe1 libhelper.a liblib.a",
    "directory": "c-example/build",
    "files": [
      "c-example/build/CMakeFiles/exe1.dir/file2.c.o",
      "c-example/build/libhelper.a",
      "c-example/build/liblib.a"
    ]
  }
]
```

1. If a given project is a CMake project, UTBot prompts user to invoke a cmake command on it, generating Makefiles (or
   offers to automatically do it by itself). From now on, all projects can be treated as projects which are built with
   the use of Makefiles;
2. UTBot applies Bear to project Makefiles. Bear is able to create compile_commands.json, and it was patched, so it is
   able to construct link_commands.json as well.

The approach scheme can be viewed on scheme bellow, with algorithm steps highlighted with blue arrows.

![jsons](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/jsons.png)

