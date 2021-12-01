---
name: How UTBot Works
route: /docs/cpp/advanced/utbot-inside
parent: Documentation
menu: Advanced
description: UnitTestBot C pipeline is described in this section. It gives a basic overview of the product inside that might be useful for the ones who would like to contribute to UnitTestBot.
---

# How UTBot Works


## Tests Generation
The pipeline of tests generation is too long and straightforward. The most important things are described below in sequential order.

1. [Client](/docs/cpp/installation/installing-the-vs-code-plugin) sends request (one of [types](/docs/cpp/usage/generating)) 
to [server](/docs/cpp/installation/installing-the-utbot-server). 
The [corresponding](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/testgens) object aggregates requests' information.
2. [Fetcher](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/fetchers/Fetcher.cpp) fetches types, methods, global variable usages, array usages, includes for all files in request. 
It uses [LibTooling](https://clang.llvm.org/docs/LibTooling.html) for parsing source code, traversing types, etc.
3. [SourceToHeaderRewriter](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/clang-utils/SourceToHeaderRewriter.cpp) generates headers (.h files) based on source (.c files).
4. [FeaturesFilter](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/FeaturesFilter.cpp) filters out all methods except the ones listed in [supported syntax](/docs/cpp/advanced/syntax).
5. [Synchronizer](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/Synchronizer.cpp) synchronizes [stubs](/docs/cpp/usage/stubs) and wrappers for all files in [compile_commands.json](https://clang.llvm.org/docs/JSONCompilationDatabase.html).
6. [KleeGenerator](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/KleeGenerator.cpp) generates klee files as well as source files, also builds them in [bitcode](https://llvm.org/docs/BitCodeFormat.html) files.
7. [Linker](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/building/Linker.cpp) links bitcode files together into module.
8. [Linker](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/building/Linker.cpp) writes [Makefiles](/docs/cpp/advanced/makefiles).
9. [KleeRunner](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/KleeRunner.cpp) runs [KLEE](https://klee.github.io/) on module consecutively for each method from request.
10. [KleeGenerator](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/KleeGenerator.cpp) parses output of KLEE and writes files of [GoogleTest](https://github.com/google/googletest).
11. [Server](/docs/cpp/installation/installing-the-utbot-server) sends final response to client and also transfers generated files for remote scenario.

## Tests Running

When user runs the tests, server performs various operations that might depend on the compiler used by the project.
1. [Client](/docs/cpp/installation/installing-the-vs-code-plugin) sends request to [server](/docs/cpp/installation/installing-the-utbot-server).
2. [TestRunner](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/TestRunner.cpp) chooses coverage tool based on the compiler used by the project. 
It is [GcovCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/GcovCoverageTool.cpp) in case of [gcc](https://gcc.gnu.org/) and [LlvmCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/LlvmCoverageTool.cpp)  in case of [clang](https://clang.llvm.org/).
3. [TestRunner](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/TestRunner.cpp) collects list of tuples (file path, suite name, test name) based on the information from the [client](/docs/cpp/installation/installing-the-vs-code-plugin).
4. [TestRunner](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/TestRunner.cpp) incrementally builds tests with instrumented options (coverage and sanitizer). To achieve this [Makefiles](/docs/cpp/advanced/makefiles) are used.
5. [TestRunner](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/TestRunner.cpp) runs tests by calling [make](https://www.gnu.org/software/make/manual/make.html) on makefiles that correspond to the given sources.
6. [CoverageAndResultsGenerator](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/TestRunner.cpp) collects coverage information using previously chosen tool.
    - [GcovCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/GcovCoverageTool.cpp) runs [gcov](https://gcc.gnu.org/onlinedocs/gcc/Gcov.html) on [.gcno and .gcda](https://gcc.gnu.org/onlinedocs/gcc/Gcov-Data-Files.html) files. It provides a report in `.json` format.
    - [LlvmCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/LlvmCoverageTool.cpp) runs [llvm-profdata](https://llvm.org/docs/CommandGuide/llvm-profdata.html) to merge several .profraw files into one. 
    It provides a report in `.json` format using [llvm-cov](https://llvm.org/docs/CommandGuide/llvm-cov.html).
7.  Both [GcovCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/GcovCoverageTool.cpp) and [LlvmCoverageTool](https://rnd-gitlab-msc.huawei.com/unittestbot/UnitTestBot/-/tree/master/UTBotCpp/server/src/coverage/LlvmCoverageTool.cpp) read  generated `.json` file and determine set of covered lines.
8. Finally, [Server](/docs/cpp/installation/installing-the-utbot-server) sends response to the client.
