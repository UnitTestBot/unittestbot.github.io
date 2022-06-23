---
name: UTBot Use Cases
route: /docs/cpp/installation/use-cases
parent: Documentation
menu: Installation
description: UnitTestBot supports a usage scenarios that assumes working with source code by **SSH** on a remote machine and a scenario with SFTP (or any other equivalent), that transfers files from a remote machine to local.
---

# UTBot Use Cases

UTBot Server is able to work with sources on the same filesystem. You have two options to comfortably operate with those
sources as well:

* You can use VS Code with UTBot extension locally and synchronize files with files on UTBot server host. For that, we
  recommend using VS Code [SFTP plugin](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp).
* You can Use VS Code [Remote-SSH](https://code.visualstudio.com/docs/remote/ssh) feature to use VS Code with UTBot
  extension on the same host that runs UTBot server.
* You can operate UTBot Server via its [Command Line Interface](command-line-interface).

## Using VS Code extension

Let's suppose you opened your sources folder with VS Code with UTBot extension. It does not matter if that happened on
the same host with UTBot Server or on another one. In any case, you will see [UTBot Wizard](wizard) which will help you
to set up your project for UTBot.

Firstly, it will ask for an IP and port to look for the UTBot Server. You can specify `localhost` if it is the same
machine or an IP of the machine that runs UTBot Server.

Then, UTBot Wizard will ask for a path to look for sources, and you should specify a path on the host that runs UTBot
Server. If you are on the same machine, then use your path, else use the path of the folder which you sync to.

After that, you should specify build folder of your project which contains build artifacts that UTBot uses to generate
and build test files. If the project is not build yet, you can try to configure it automatically by clicking
notifications that UTBot will send.

After you complete the UTBot Wizard, you should be ready to experience UTBot capabilities!

![wizardInstallGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/wizardInstall.gif)

## Using Command Line Interface

This case is much simpler: you can stop the UTBot Server and invoke it as specified in
in [CLI overview](command-line-interface). You do need to install VS Code extension, as all the work happens in command
line.

