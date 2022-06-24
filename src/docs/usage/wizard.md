---
name: Quickstart with UTBot Wizard
route: /docs/cpp/usage/wizard
parent: Documentation
menu: Usage
description: When you first time open your C project in Visual Studio Code with UnitTestBot extension installed UTBot Wizard will be opened. UTbot Quickstart Wizard will help you to initialize the extension settings specifically for current project.
---

# Quickstart with UTBot Wizard

When you first time open your C project in Visual Studio Code with UnitTestBot extension installed, UTBot Wizard will be
opened. UTbot Quickstart Wizard will help you to initialize the extension settings specifically for current project.

## UTBot Wizard Steps

### Server installation

Firstly, if you are using Linux, UTBot Wizard will offer you to install UnitTestBot Server. In case you haven't done it
yet, you may click `Install` button. UTBot will run the installation script in Visual Studio Code Terminal.

![wizardInstallationImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/wizardInstallation.png)

> 📝**Note**
>
> It only makes sense to install UnitTestBot Server if Visual Studio Code is opened on the machine that you are using as a remote one.

### Connection

Then, you will be asked to enter UTBot server host address and its port.

> 📝**Note**
>
> In case server is unreachable, UTBot will warn you about it.
> However, even if you fail to connect, you may skip this step and set up correct server host and port later.

![wizardConnectionImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/wizardConnection.png)

> 📝**Note**
>
> You won't be able to generate tests without connection to the UTBot Server.

### Remote Path

On the next step UTBot Wizard will ask you to specify the path to the project on a remote host. If you are on Linux
machine, UTBot assumes that you use this machine also as remote and fills in the remote path with current project path
opened in Visual Studio Code.

> 📝**Note**
>
> When VSCode Remote Scenario is used, Remote Path matches the workspace path, and it can be automatically determined by UnitTestBot extension.
> In case you work via SFTP scenario (or any equivalent) Remote Path should be set manually and correspond to the location of the project on a remote host.

![wizardRemotePathImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/wizardRemotePath.png)

### Build Directory and CMake Options

In the end, UTBot will ask you to specify relative path to the build directory and set custom CMake options.

![wizardBuildCmakeImg](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/wizardBuildCmake.png)

## UTBot Quickstart Wizard Demo

![wizardGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/wizard.gif)