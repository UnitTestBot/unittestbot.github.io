---
name: UTBotCpp Code Analyzer
path: /docs/cpp/usage/CodeAnalyzer
---

# UTBotCpp Code Analyzer

In this section we describe what code analyzer UTBot supports. 
Code analyzer report in SARIF (Static Analysis Results Interchange Format). SARIF format is JSON-based. We can use SARIF reports in products that support showing directly or with plugins.  GitHub or Visual Studio Code are good examples.

## Using with GitHub
You can generate code analysis information from UTBotCpp for the entire project or selected folder or set of file, selected by pattern.  The [UTBot-Action](https://github.com/UnitTestBot/UTBotCpp-action) makes this generation for you. Code analyzer information and tests are generated in correspondent folders  and stored new project branch with name - ``utbot-code-analysis-[short-commit-hash]``. The action makes a pull request to a branch from which you launched the action. 

How-to steps:

* Allow [UTBot-Action](https://github.com/UnitTestBot/UTBotCpp-action) to make a pull request in your repository by the ``Settings > Actions > Allow GitHub Actions to create and approve pull requests`` command:

![Permission](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/utbot-cpp-wiki/cpp-ca-PermissionForCreatingAndApprovingPullRequest.png)

* Make a folder `.github/workflows` in your GitHub repository and create a file with `.yml` extension, for example `run-utbot.yml`

* In created YML file you have to add one more permission  `permissions: write-all` and after that you can use UTBot Action in your repository action. Here is  an example that runs UTBotCpp analysis for a whole project: 
``` yml
name: "UTBot code analysis"

on:
  workflow_dispatch:
    
jobs:
  build:
    runs-on: ubuntu-latest
    permissions: write-all
    steps:
    - name: UTBot code analysis
      uses: UnitTestBot/UTBotCpp-action@v2022.06.0
      with:
        add_tests: 'true'
        refresh_tests: 'false'
        utbot_version: '2022.06.0'
        scope: 'project'
```
Newly created action  runs on ``workflow_dispatch``,  so for launching the action push the
``Actions > Select workflow > UTBot code analysis (or your workflow name) > Run workflow > Run workflow`` button in GitHub UI:

![RunAction](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/utbot-cpp-wiki/cpp-ca-RunAction.png)

* As a result, the [UTBot-Action](https://github.com/UnitTestBot/UTBotCpp-action) action creates  a pull request from new ``utbot-code-analysis-[short-commit-hash]`` branch to a branch from which you run. In action-created branch there are two new folders. The first folder contains generated tests, the second - analysis results. The structure of the folder with analysis information  repeats the structure of project source folder and contains SARIF file report for each source file in corresponded sub folder. Additionally an aggregated SARIF report is created for a whole project (`project_code_analysis.sarif`)  . This aggregated report contains information about all project files and can be used for highlighting errors in the project scope.

* To view the result of code analysis you have to go to the ``Security > Code scanning alerts`` tab.  By selection of security report item, you see the trace of detected problem, which starts from a test case.

![ShowAllerts](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/utbot-cpp-wiki/cpp-ca-ShowAllerts.png)

## Using with Visual Studio Code

We are suggest that you are have properly installed UTBot plugin.

 How-to steps:

* To use UTBot Code Analyzer you have to run the ``File > Preferences > Settings (or Ctrl + ,)`` page, then navigate to the ``Extensions > UnitTestBot`` tab and turn on SARIF generation.
![TurnOnSarifGeneration](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/utbot-cpp-wiki/cpp-ca-TurnOnSarifGeneration.png)
* After [generating tests](https://github.com/UnitTestBot/UTBotCpp/wiki/generating-tests) in your project there are two new folders. The first folder contains generated tests, the second - analysis results. The structure of the folder with analysis information  repeats the structure of project source folder and contains SARIF file report for each source file in corresponded sub folder. Additionally an aggregated SARIF report is created for a whole project (`project_code_analysis.sarif`)  . This aggregated report contains information about all project files and can be used for highlighting errors in the project scope.
* To view the result of code analysis you have to install the [Sarif Viewer](https://marketplace.visualstudio.com/items?itemName=MS-SarifVSCode.sarif-viewer) extension and run the ``Ctrl + Shift + P > Sarif: Show Panel > Open SARIF log``  command. Then choose the `project_code_analysis.sarif` file to show all discovered problems.
![VSCODEResult](https://github.com/UnitTestBot/unittestbot.github.io/raw/source/resources/images/utbot-cpp-wiki/cpp-ca-VSCODEResult.png)
