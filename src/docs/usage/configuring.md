---
name: Configuring Project
route: /docs/cpp/usage/configuring
parent: Documentation
menu: Usage
description: When you initialize your C project with UTBot Wizard extension will suggest you to configure project. Also, you may configure project afterwards using command 'UTBot Configure project' in pallet.
---

# Configuring Project

When you initialize your C project with UTBot Wizard, extension will suggest you to configure project. Also, you may
configure project afterwards using command `UTBot: Configure project` or `UTBot: Reset cache and configure project` in
pallet.

## Project Configuration Steps

### Check Build Folder for exist

Firstly, if build folder is missing, extension will offer you to create that. In case you haven't done it yet, you may
click `Create build folder` button. UTBot will create that on host machine (as well as `bear.sh` script within).

![configureCheckBuildFolderImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/configureCheckBuildFolder.png)

### Export Project Model

Then, you will be asked to configure project. In case you haven't done it yet, you may click 'Configure' button. UTBot
will call `cmake` command for CMake project. It also will pass root directory and CMake options specified in wizard.
Next, regardless of project's type UTBot will try to call `./bear.sh make` from build directory. If everything is
successful, two files will be created in build directory `compile_commands.json` and `link_commands.json`. Or,
alternatively, you may run `./bear.sh` from create build directory with your build command as argument. For
example, `./bear.sh make -j8`.

![configureExportProjectModelImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/configureExportProjectModel.png)

> 📝**Note**
>
> Script `bear.sh` is just a wrapper around [Bear](https://github.com/UnitTestBot/Bear) tool.
