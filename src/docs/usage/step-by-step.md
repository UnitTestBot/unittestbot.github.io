---
name: Step by step
route: /docs/cpp/advanced/step-by-step
parent: Documentation
menu: Advanced
description: step by step guide how generate tests with UTBotCpp
---
# Step by step release use

1) #### Install and run server
    [More about server install](install-server)

    * `(remote only)` Connect to your server 
    * make directory for UTBotCpp 
        `mkdir utbotcpp`
    * go into directory 
        `cd utbotcpp`
    * add release version to bash env, check it on [github releases page](https://github.com/UnitTestBot/UTBotCpp/releases)
        `export UTBOT_VERSION="1.0.31"`
    * Download archive from 
        `wget https://github.com/UnitTestBot/UTBotCpp/releases/download/v$UTBOT_VERSION/utbot-release-$UTBOT_VERSION.zip`
    * unarchive zip
        `unzip utbot-release-$UTBOT_VERSION.zip`
    * unarchive from tar.gz and run UTBotCpp server
        `chmod +x unpack_and_run_utbot.sh && ./unpack_and_run_utbot.sh`

    for restart UTBotCpp run `./utbot_server_restart.sh $PORT` from utbot_distr

    ![serverinstallGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/serverInstall.gif)

2) #### `(remote only)` Install VSCode SFTP plugin (skip if you alredy have installed SFTP plugin)
    * [link](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp)
    * in VSCode invoke `Developer: Reload Window`command from the Command pallette `Shift + Ctrl + P` or `F1`

    ![sftpinstallGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/sftpinstall.gif)

3) #### Install VSCode plugin
    [More about VSCode plugin install](install-vscode-plugin)
    * `(remote only)` download archive from [github releases page](https://github.com/UnitTestBot/UTBotCpp/releases)
    * `(remote only)` unarchive zip
    * in VSCode inovke `Extensions: Install from VSIX` command from the Command pallette `Shift + Ctrl + P` or `F1`
    * choose the `utbot_plugin.vsix` file, that contains in release zip archive.

    ![clientinstallGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/clientInstall.gif)

4) #### Open project
    For test project, we recommend use [c-example](https://github.com/UnitTestBot/UTBotCpp/tree/main/integration-tests/c-example)
    * `File` -> `Open Folder`

5) #### `(remote only)` Add SFTP config
    * in VSCode invoke `SFTP: config` command from the Command pallette `Shift + Ctrl + P` or `F1`
    * fill with your data
    * in VSCode inovke `SFTP: Sync Local -> Remote` command from the Command pallette `Shift + Ctrl + P` or `F1`
    * check files on server

    ![sftpconfigGif](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/sftpconfig.gif)

```json 
{
    "name": "ServerName",
    "host": "192.168.1.50", // your server ip, or host name
    "protocol": "sftp",
    "port": 22, // ssh port to server usually 22
    "username": "utbot", // username on server
    "remotePath": "/home/utbot/remote/c-example", // path for project should same with path that you set in UTBotCpp plugin settings 
    "uploadOnSave": true
}
``` 

6) #### Configure VSCode plugin
    [More about UTBot wizard](wizard)
    * in VSCode inovke `Run UTBot: Quickstart Wizard` command from the Command pallette `Shift + Ctrl + P` or `F1`
    * `Host` on `Connection` page
        * `(same machine)` set `127.0.0.1` 
        * `(remote only)` set same with SFTP host ip
    * `Port` on `Connection` page by defult `2121`, or `$PORT` that you use then run `./utbot_server_restart.sh $PORT`
    * `Remote Path` page
        * `(same machine)` set path to project that you open
        * `(remote only)` set same with SFTP remotePath
    * use defaults`Build Directory` and `CMake Options`
    * press Finish
    * Open `UTBot explorer` from left corner or press F1 and type `View: Show UTBot explorer`

    ![wizardGif]( https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/wizard.gif)
    
7) #### First tests generation
    * right click on some source file `Generate Tests` -> `for Current File`
    * in lower right corner press `Create build folder`
    * in lower right corner press `Configure`

    ![generateGif]( https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/gifs/generate.gif )

8) #### Generate tests
    [More generate tests](generating-tests)
    - For project
        * in VSCode inovke `UTBot: Generate Tests For Project` command from the Command pallette `Shift + Ctrl + P` or `F1`
        * right click in VSCode folder explorer and click `UTBot: Generate Tests For Project`
    - For file
    open file
        * in VSCode inovke `UTBot: Generate Tests For Current File` command from the Command pallette `Shift + Ctrl + P` or `F1`
        * right click on it `Generate Tests` -> `for Current File`
    - For function
    open file with function
        * place the carriage in function body, inovke `UTBot: Generate Tests For Current Function` command from the Command pallette `Shift + Ctrl + P` or `F1`
        * right click on function body `Generate Tests` -> `for Current Function`