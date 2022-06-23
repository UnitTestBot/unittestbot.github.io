# What is UTBot Cloud?

UTBot Cloud is a web application allowing:
* Generate and run tests for a file written in C language with the corresponding report
* Generate and run tests for a class written in Java language with the corresponding report

> ⚠ Code coverage measurement is supported only for C language now.

UTBot Cloud consists of two parts:
* UTBot Site - client side (source code is stored in the current repository)
* [UTBot Online](https://github.com/UnitTestBot/UnitTestBot-Cloud) - server side

UTBot Cloud for generating tests, getting information about the launch tests, generating information about the number of lines of code covered by tests in C uses the UTBot C/C++ CLI console application. The application creates an abstraction to work with the [UTBot C/C++](https://github.com/UnitTestBot/UTBotCpp) tool generating tests.

UTBot Cloud for generating tests, getting information about the launch tests in Java uses the UTBot Java CLI console application. The application creates an abstraction to work with the [UTBot Java](https://github.com/UnitTestBot/UTBotJava) tool generating tests.

# How to install and use UTBot Site

As the guide is dedicated to client side, we skip the corresponging steps for the server side of UTBot Cloud. Anyway, it can be found in [UTBot Online](https://github.com/UnitTestBot/UnitTestBot-Cloud) repository.

UTBot Site can be deployed on **Ubuntu 18.04** or later. It requires **npm** installed.

Install and run UTBot Online:
1. Clone repository with [UTBot Online](https://github.com/UnitTestBot/UnitTestBot-Cloud) source code.
2. Go into repository directory.
3. Run commands (install only dependencies you don't have on your machine): 
```npm install
   npm install -g yarn
   npm install -g gatsby-cli
   yarn
   sudo apt install python3
```
4. Switch to source **branch**.
5. Run ```sudo gatsby build``` or ```sudo npm run build``` to build site
```sudo npm run build``` is used when you want to have latest version of UTBot documentation on the site
6. Run ```sudo gatsby develop``` or ```sudo npm run develop``` to deploy site
```sudo gatsby develop``` is used when you want to have latest version of UTBot documentation on the site

Congratulations! UTBot Site is deployed on your machine.
