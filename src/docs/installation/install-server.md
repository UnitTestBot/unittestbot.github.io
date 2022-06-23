---
name: Installing and Setting Up the UTBot Server
route: /docs/cpp/installation/installing-the-utbot-server
parent: Documentation
menu: Installation
description: A step-by-step instruction to install and run the UTBot Server on a Linux host.
---

# Installing and Setting Up the UTBot Server

This page provides a step-by-step instruction to install and run the **UTBot Server** on a Linux host. For list of
supported platforms, see [system requirements](system-requirements).

You probably would want to install [UTBot VS Code Plugin](install-vscode-plugin) after you finish server instalation.

## Steps to Install

1. Place [release](https://github.com/UnitTestBot/UTBotCpp/releases) zip archive in your working directory.

2. Unzip archive

3. Run the script:

```sh
$ chmod +x unpack_and_run_utbot.sh && ./unpack_and_run_utbot.sh
```

3. The script will unpack required dependencies in a folder and then run server executable. You will be given
   information about its process id, logging path, path to temporary artifacts and port (the default option is `2121`).
   At any time you can kill the server using `kill $pid`. If you want to launch UTBot server on another port, you can
   enter the directory `utbot_distr` and call the script

```sh
$ ./utbot_server_restart.sh $PORT
````

## Installation Demo

The animation below demonstrates the deploying process for the UTBot Server and mounting a simple C project inside it.

![serverInstallGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/serverInstall.gif)