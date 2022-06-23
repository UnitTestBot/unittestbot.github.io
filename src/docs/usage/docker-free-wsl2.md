---
name: Docker-free-wsl2
route: /docs/cpp/usage/docker-free-wsl2
parent: Documentation
menu: Usage
description: No description
---

# Docker-free UTBot in WSL2

If you have a project on Windows you may like to use lightweight solution for the UTBot that is based on WSL2 virtualization approach.

Please, be sure that you have an ability to install the WSL2 in you Windows 10 or 11. 
Maybe you need the upgrade Windows 10 to the latest version 
and the [Windows 10 Upgrade Assistance](https://support.microsoft.com/en-us/topic/windows-10-update-assistant-3550dfb2-a015-7765-12ea-fba2ac36fb3f) 
is the best way to go.

In the simplest variant you need to create an empty WSL2 container with recommended version of Ubuntu (currently it is **Ubuntu 18.04**)
That can be done by command (may need administrator privileges):
```
PS C:\Users\user>wsl --install -d Ubuntu-18.04
```

After the installation you have initial setup for WSL2 user (just for unification we recommend name it 'utbot'):
```bash
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: utbot
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Installation successful!
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

utbot@userhwlp:~$
```

At this point the WSL2 initial container installation is finished. 
By default new UTBot WSL2 container is called **Ubuntu-18.04**.
```PowerShell
PS C:\Users\u00663918> wsl --list --verbose
  NAME                   STATE           VERSION
  Ubuntu-18.04           Running         2      <---------- Newly installed WSL2 container   
```
Now you need to install the UTBot server in it.

For the common case this step is described in the [install server](https://github.com/UnitTestBot/UTBotCpp/wiki/install-server)
document, but this simplified WSL2 installation has some specifics and is described below.

## Step by step UTBot server installation and the first run
**Hint**: you can skip this section by running the script from home **utbot** folder:
```bash
#!/bin/bash

#please, change UTBOT_VERSION value to the latest version from https://github.com/UnitTestBot/UTBotCpp/releases
export UTBOT_VERSION="1.0.167" 

mkdir utbotcpp
cd utbotcpp
wget https://github.com/UnitTestBot/UTBotCpp/releases/download/v$UTBOT_VERSION/utbot-release-$UTBOT_VERSION.zip
sudo apt-get install unzip
unzip utbot-release-$UTBOT_VERSION.zip
tar -xvzf utbot_distr.tar.gz
chmod +x unpack_and_run_utbot.sh 
sudo ./unpack_and_run_utbot.sh
```
 
  
* You need to check the latest version of UTBot from [release artifacts](https://github.com/UnitTestBot/UTBotCpp/releases).
  Please, find the URL of artifacts that is taken from **Assets**. As an example: [https://github.com/UnitTestBot/UTBotCpp/releases/download/v1.0.167/utbot-release-1.0.167.zip](https://github.com/UnitTestBot/UTBotCpp/releases/download/v1.0.167/utbot-release-1.0.167.zip).
  Here "1.0.167" is the latest version at the time of writing.
* Make the directory for UTBotCpp 
  ```bash
  utbot@userhwlp:~$ mkdir utbotcpp 
  ```
* Go into created directory utbotcpp
  ```bash
  utbot@userhwlp:~$ cd utbotcpp 
  ```
* Download archive from release artifacts
  ```bash
  utbot@userhwlp:~/utbotcpp$ wget https://github.com/UnitTestBot/UTBotCpp/releases/download/v1.0.167/utbot-release-1.0.167.zip
  ```
* Unarchive downloaded zip (install unzip `sudo apt-get install unzip` first!)
  ```bash
  utbot@userhwlp:~/utbotcpp$ unzip utbot-release-1.0.167.zip
  ```
* Unpack tar 
  ```bash
  utbot@userhwlp:~/utbotcpp$ tar -xvzf utbot_distr.tar.gz
  ```
* Install and run server under the `root`
  ```bash
  utbot@userhwlp:~/utbotcpp$ sudo chmod +x unpack_and_run_utbot.sh && ./unpack_and_run_utbot.sh
  ```
  **NB!** UTBot need to be run under the root to get an access to Windows File System with necessary privileges. 

To run correctly UTBot server needs well-configured build-related and `gcc-9` packages.
You can do it by running the following script:
```bash
#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get install build-essential software-properties-common -y
sudo add-apt-repository ppa:ubuntu-toolchain-r/test -y
sudo apt-get update -y
sudo apt-get install gcc-9 g++-9 -y
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 60 --slave /usr/bin/g++ g++ /usr/bin/g++-9
sudo update-alternatives --config gcc
```
## Restart UTBot server
There are several ways to restart the UTBot server:
* Restart UTBot server only. You can do it by the command from home directory of `utbot` user inside WSL2 container:
  ```bash
  utbot@userhwlp:~$ sudo ~/utbotcpp/utbot_distr/utbot_server_restart.sh
  ```
* Restart WSL2 subsystem from PowerShell command line
  ```PowerShell
  PS C:\Users\u00663918> wsl --terminate Ubuntu-18.04
  ```
  After that you need to run WSL2 container **Ubuntu-18.04** again and start the server by internal script
  ```bash
  utbot@userhwlp:~$ sudo ~/utbotcpp/utbot_distr/utbot_server_restart.sh
  ```
## VC UTBot plugin setup
Due to single FS project organization you don't need synchronize the project source on Windows with WSL2 UTBot server.
As a result you don't need SFTP plugin.
While mandatory setup of UTBot plugin (Run UTBot: Quickstart wizard) you need 
* `Connection` step:
  - Type `localhost` in **Host**  field (**NB!** not `127.0.0.1`, not a temporary IP address that will change each time the WSL2 container is started)
  - Type `2121` in **Port**  field
* `Remote Path` step:
  Type `/mnt/d/dev/c-example-my-vc` for windows project from  `d:\dev\c-example-my-vc` in **Remote Path** field

That is all!
Good luck!