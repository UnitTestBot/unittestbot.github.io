---
name: VS Code plugin
route: /docs/cpp/vscode-plugin
parent: Documentation
menu: UnitTestBot C/C++
---

# VS Code plugin description

It is intended that most users operate with UTBot via its Visual Studio Code plugin. UTBot and its VS Code plugin
communicate through gRPC protocol.

![VSCode plugin](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/vscodePlugin.PNG)

* Tests generation commands to VSCode Command Palette. UTBot can generate tests for:
    - whole project
    - file
    - function
    - line, i.e. generate a test that forces the execution to run through the selected code line (if such a test exists)
    - assertion, i.e. generate test that fails selected assertion (if exists)
    - output, i.e. generate a test that forces selected function to return a specific value (if exists).
* VSCode Lenses with actions for running a single test, all tests and test suite for one source file
* Icons in VSCode Side Bar, which show UTBot status
* VSCode Activity Bar item for selecting project sources and project targets
* UTBot extension settings for customizing UTBot behaviour.