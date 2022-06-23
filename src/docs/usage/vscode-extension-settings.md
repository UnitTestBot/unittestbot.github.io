---
name: VS Code Extension Settings
route: /docs/cpp/usage/vscode-extension-settings
parent: Documentation
menu: Usage
description: UnitTestBot extension for VSCode provides flexibility in its configuration via settings. The extension can be adjust as you please and this page gives a detailed description of all available settings.
---

# VS Code Extension Settings

UnitTestBot extension for VSCode provides flexibility in its configuration. Extension settings might be accessed as
follows: `File > Preferences > Settings  (or Ctrl + ,)`, then navigate to `Extensions > UnitTestBot`.

In case you are looking for some specific setting(s), search bar might be used.

![settingsGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/settings.gif)

For convenience, all the settings are divided into the following groups:

* Deployment
* Paths
* Generation
* Stubs
* Visual
* Advanced

## Deployment

#### UTBot Host

**Expected value format**: `string, that represents host address`;

**Default value**: `127.0.0.1`;

**JSON identifier**: `unittestbot.deployment.utbotHost`.

#### UTBot Port

Address of the host UTBot Server is running on. Learn more about UTBot Server installation.

**Expected value format**: `number, that represents a port`;

**Default value**: `2121`;

**JSON identifier**: `unittestbot.deployment.utbotPort`.

The port used by the client to connect to UTBot Server via a gRPC channel. This field should be filled accordingly to
the UTBot Server Port parameter specified during the UTBot Server installation.

#### Remote Path

**Expected value format**: `UNIX path`;

**Default value**: `<empty string>`;

**JSON identifier**: `unittestbot.deployment.remotePath`.

Remote path configuration specifies the path to the project on a remote host.

When VSCode Remote Scenario is used, Remote Path matches the workspace path and it can be automatically determined by
UnitTestBot extension. In case you work via SFTP scenario (or any equivalent) Remote Path should be set manually and
correspond to the location of the project on a remote host.

## Paths

#### Build Directory

**Expected value format**: `UNIX path`;

**Default value**: `build`;

**JSON identifier**: `unittestbot.paths.buildDirectory`.

Relative path to the build directory. File `compile_commands.json` (as well as link_commands.json) should be located in
the build folder.

#### CMake options

**Expected value format**: `string, that represents valid CMake flags`;

**Default value**: `-DCMAKE_EXPORT_COMPILE_COMMANDS=ON -DCMAKE_EXPORT_LINK_COMMANDS=ON`;

**JSON identifier**: `unittestbot.paths.cmakeOptions.description`.

Options passed to CMake command when auto build your project first time you open it.

#### Source Directories

**Expected value format**: `UNIX paths, separated by commas`;

**Default value**: `<empty>`;

**JSON identifier**: `unittestbot.paths.sourceDirectories`.

Relative paths to the directories, that are marked as source directories. UTBot looks for source file in specified
directories.

> 📝**Note**
>
> Please, prefer using UTBot Explorer View instead of raw settings. UTBot Explorer View makes it possible to mark/unmark directories as "source directories".

#### Tests Directory

**Expected value format**: `UNIX path`;

**Default value**: `tests`;

**JSON identifier**: `unittestbot.paths.testsDirectory`.

Relative path to the directory where generated tests will be placed.

## Tests Generation

#### Generate for Static Functions

**Expected value format**: `boolean (checkbox)`;

**Default value**: `True`;

**JSON identifier**: `unittestbot.testsGeneration.generateForStaticFunctions`.

When set to `True`, UnitTestBot generates tests for C static functions, otherwise such functions won't be proceeded.

> 📝**Note**
>
> In C, a static function is not visible outside of its translation unit, which is the object file it is compiled into. In other words, making a function static limits its scope. Due to this, you can think of a static function as of  "private" function in other programming languages. It's commonly believed, that such functions shouldn't be tested, as they are not visible outside and can't be called elsewhere. However, as some projects (e.g. GNU Coreutils) tend to implement the main functionality inside static functions, UnitTestBot gives an opportunity to test them as well.

## Verbose formatting

**Expected value format**: `boolean (checkbox)`;

**Default value**:  `False`;

**JSON identifier**: `unittestbot.testsGeneration.verboseFormatting`.

When set to `True` UnitTestBot generates tests in accordance verbose formatting,
otherwise the tests are generated in a simpler form and take less space (lines of code).

## Stubs

#### Implicitly Generate Stubs

**Expected value format**: `boolean (checkbox)`;

**Default value**:  `False`;

**JSON identifier**: `unittestbot.stubs.implicitlyGenerateStubs`.

When set to `True`, UTBot will generate stubs for the functions from external modules automatically.

The function is a part of external module with respect to function (or file) the tests are generated for if it's a part
of different linking unit. UTBot detects linking units via link_commands.json.

#### Use Stubs

**Expected value format**: `boolean (checkbox)`;

**Default value**: `False`;

**JSON identifier**: `unittestbot.stubs.useStubs`.

When set to `True`, UTBot will use generated stubs from `<testsDir>/stubs` folder instead of real files.

## Visual

#### Show Test Results

**Expected value format**: `boolean (checkbox)`;

**Default value**: `True`;

**JSON identifier**: `unittestbot.visual.showTestResults`.

When set to `True`, the results of the run tests are displayed on the left side of the test headers.

> ✔️ **Recommendation**
>
> It's recommended to set given preference to `False` in case you use a separate test runner extension for Visual Studio Code.

## Advanced

#### Enable Developer Mode

**Expected value format**: `boolean (checkbox)`;

**Default value**:  `False`;

**JSON identifier**: `unittestbot.advanced.enableDeveloperMode`.

Enables hidden developer commands useful for debug.

#### Use Deterministic Searcher

**Expected value format**: `boolean (checkbox)`;

**Default value**:  `False`;

**JSON identifier**: `unittestbot.advanced.useDeterministicSearcher`.

Use deterministic searcher to traverse bitcode in the same way every time. It may significantly slow down tests
generation.

#### Timeout Per Function

**Expected value format**: `number, that represents seconds`;

**Default value**: `30`;

**JSON identifier**: `unittestbot.advanced.timeoutPerFunction`.

Maximum time (in seconds) is allowed for generation tests per function. Set to `0` to disable it.

#### Timeout Per Test

**Expected value format**: `number, that represents seconds`;

**Default value**: `0`;

**JSON identifier**: `unittestbot.advanced.timeoutPerTest`.

Maximum time (in seconds) allowed for a single test being run. After that, the test is automatically cancelled. The
option can be used if some of the generated tests force the user code to hang; in such a
case, [Run All Tests and Show Coverage](run-generated-tests) option will also hang. However, if the timeout for test is
specified, hanging tests will be cancelled silently and the coverage will be shown. Set to `0` to disable it.