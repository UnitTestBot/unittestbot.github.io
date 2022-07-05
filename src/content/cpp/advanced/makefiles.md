---
name: Makefiles
path: /docs/cpp/advanced/makefiles
---

# Makefiles

[GNU make](https://www.gnu.org/software/make/manual/make.html) is a primary tool for incremental build of bitcode and
binary files as well. Makefiles for binary files are public, so they may be used for tests running right from the
command line.

1. Find corresponding makefiles, which are stored in host's project build directory, `utbot\make` subdirectory. For
   example, makefile for `c-example\src\calc.c` would be `c-example\build\utbot\make\calc.mk`. Please note: makefiles
   and tests are generated at the same time.
2. When necessary makefile is found, use the 'cd' command to move from your present directory to makefile's one.
3. Run `make -s -f calc.mk run`, for example.
4. Congratulations! Your tests are run and status is shown in the command line.

![makefileRunImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/makefileRun.png)