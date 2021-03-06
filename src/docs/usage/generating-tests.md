---
name: Generating Tests
route: /docs/cpp/usage/generating
parent: Documentation
menu: Usage
description: This page describes various tests generation scenarios that UTBot supports (project, folder, file, function, line).
---

# Generating Tests

In this section we describe various tests generation scenarios that UTBot supports.

## Generating Tests for Project

You can generate tests for the entire project.

**How-to steps**:

1. Right mouse click on VS Code Explorer;
2. Select `UTBot: Generate Tests for Project`.

![projectGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/project.gif)

> 📝**Note**
>
> It can take some time to analyze a big project. If you see a pop-up message at the right bottom corner of the IDE window, it means analysis is still in progress.
> Once code analysis is completed, a test folder will be created.

## Generating Tests for Folder

You can generate tests for the folder.

**How-to steps**:

1. Right mouse click on VS Code Explorer;
2. Select `UTBot: Generate Tests for Folder`;
3. Specify the path to the folder you want to generate tests for.

![folderGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/folder.gif)

## Generating Tests for File

You can generate tests for a `'*.c'` file.

> 📝**Note**
>
> It's worth to note only public functions (declared in a corresponding header file) are considered as targets for tests.

**How-to steps**:

1. Right mouse click to a target source file;
2. Select `UTBot: Generate Tests... for Current File`.

![file.Gif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/file.gif)

Once code analysis is completed, a test folder with test named according convention `test_%filename%.cpp` will be
created. Now you can sync local and remote environments, recompile the project and run tests.

## Generating Tests for Function

Generate tests for a particular function is also possible.

**How-to steps**:

1. Move the caret inside function body;
2. Right mouse click to a text editor;
3. Select `UTBot: Generate Tests... > for Current Function`.

![functionGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/function.gif)

Once code analysis is completed, a test folder with test named according convention `test_%filename%.cpp` will be
created. Now you can sync local and remote environments, recompile the project and run tests.

## Generating Tests for Line

It's even possible to cover a particular branch instead of entire function.

**How-to steps**:

1. Move the caret to a line you're going to cover by a test;
2. Right mouse click to a text editor;
3. Select `UTBot: Generate Tests... > for Current Line`.

![lineGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/line.gif)

Once code analysis is completed, a test folder with a test file named according convention `test_%filename%.cpp` will be
created. Now you can sync local and remote environments, recompile the project and the run test.

## Generating Tests with Prompted Result

If you need to find parameters for which a function returns a specific output, you may find this UTBot feature extremely
useful.

> 📝**Note**
>
> In general, UTBot **is not able to solve NP-hard problems**, that's why it is meaningless to use this feature on, for example, hash functions.

**How-to steps**:

1. Move the caret inside a function body;
2. Right mouse click to a text editor;
3. Select `UTBot: Generate Tests... > with a Prompted Result`.

![resultGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/result.gif)

Set up a condition (as an inequation or as an equation) the target output satisfies:
an operator (in C syntax), a value (constants supported only).

## Generating Tests that Fail Assertion

If some code blocks in your project are guarded by asserts (means, classic C-language asserts provided by "assert.h")
you probably want to know which parameters break them. With UnitTestBot you can generate tests to find such parameters.

**How-to steps**:

1. Move the caret to a line with `assert(...)` statement you're going to break;
2. Right mouse click to a text editor;
3. Select `UTBot: Generate Tests... > that Fail an Assertion`.

![assertGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/assert.gif)

Once code analysis is completed, a test folder with a test file named according convention `test_%filename%.cpp` will be
created.

> ⚠️**Be advised**
>
> It's not recommended to include assert-failures tests to a common test suite with regular checks as a failure triggers the engine to terminate tests execution.