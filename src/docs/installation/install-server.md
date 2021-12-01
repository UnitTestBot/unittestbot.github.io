---
name: Installing and Setting Up the UTBot Server
route: /docs/cpp/installation/installing-the-utbot-server
parent: Documentation
menu: Installation
description: A step-by-step instruction to install and run the UTBot Server on a Linux host. 
---

import ServerInstallGif from '/resources/gifs/serverInstall.gif';

# Installing and Setting Up the UTBot Server

This page provides a step-by-step instruction to install and run the **UTBot Server** on a Linux host. For list of supported platforms, see [system requirements](/docs/cpp/sys-requirements).

You probably would want to install [UTBot VS Code Plugin](/docs/cpp/installation/installing-the-vs-code-plugin) after you finish server instalation.

## Steps to Install

1. Place a snapshot or release installation script in your working directory. 

For demo purposes we will name this script as `utbot_installer.sh`;

2. Run the script:

```sh
$ ./utbot_installer.sh
```

3. The script will download all the required dependencies, unpack them in a folder and then run server executable. You will be given information about its process id, logging path, path to temporary artifacts and port (the default option is `2121`). At any time you can kill the server using `kill $pid`. If you want to launch UTBot server on another port, you can enter the directory `utbot_distr_TAG` (where `TAG` is the release tag number) and call the script 
```sh
$ ./utbot_server_restart.sh $PORT
````
, specifying the needed port.
   
## Installation Demo
The animation below demonstrates the deploying process for the UTBot Server and mounting a simple C project inside it.

<img src={ServerInstallGif} className="demoGif"/>
