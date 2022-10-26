---
name: CLion plugin
route: /docs/cpp/clion-plugin
menu: UnitTestBot C/C++
parent: Documentation
---

# Plugin description

## UI overview

Main UI elements of the plugin are:
- Status bar icons, they show connection status and verbose mode option
- `UTBot consoles`, a window to show logs from server (GTest log, Server log) and plugin (Client log)
- `UTBot targets`, a window to show targets found by server in current project
- `UTBot Source Directories`, a view to show source directories marked green

![clionPluginOverview](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/images/clion_plugin/overview.png?raw=true)

## Tests generation

You can trigger tests generation in multiple ways:
- From editor context menu. For example, right click in editor and choose `UTBot Generate Tests... for File`

  <img src="https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/images/clion_plugin/generate/from-editor.png?raw=true" alt="fromEditor" height="400" width="500"></img>

- From project view context menu. For example, right click on file in project view and choose: 
`UTBot: Generate Tests For Folder`

  <img src="https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/images/clion_plugin/generate/from-project-view.png?raw=true" alt="fromProjectView" height="600"></img>
- From search window. Open search window by pressing `Shift` twice. Then search for a particular 
action, for instance `UTBot: Generate For project`

![fromProjectView](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/images/clion_plugin/generate/trigger-from-search.png?raw=true)

## Running tests with coverage

### Run a single test

**How-to steps**:

1. Open file with generated tests
2. Click on the icon located near the test

![runSingleTestGif](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/gifs/clion_plugin/run/run-single-test.gif?raw=true)

### Run all tests in a file

**How-to steps**:

1. Open file with generated tests
2. Click on the icon located near `UTBot` namespace

![runAllInFileGif](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/gifs/clion_plugin/run/run-all-in-file.gif?raw=true)

### Run all tests in project 

**How-to steps**:

1. Open search window by pressing `Shift` twice
2. Search for `UTBot: Run All Tests and Show Coverage`

## Manage coverage

Consider the following scenario: you ran tests `A` with coverage, and then you run 
some other tests `B` with coverage. Then a dialog with three options will be opened: 

![dialog](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/images/clion_plugin/coverage/dialog.png?raw=true)

It is because there is already coverage displayed 
from tests `A`, and you can choose:
- to merge coverage from `A` with `B` **(Add to active suites)**
- to replace coverage from `A` with coverage from `B` **(Replace active suites)**
- to show coverge only from `A` **(Do not apply collected coverage)**


## Plugin settings

You can view and edit available settings in `Settings` -> `Tools` -> `UTBot Settings`

![clionPluginSettingsDemo](https://github.com/UnitTestBot/unittestbot.github.io/blob/source/resources/gifs/clion_plugin/settings-demo.gif?raw=true)

