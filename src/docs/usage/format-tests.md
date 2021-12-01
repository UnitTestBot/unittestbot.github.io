---
name: Formatting Tests
route: /docs/cpp/usage/format-tests
parent: Documentation
menu: Usage
description: Generated tests can be formatted in 'one-line' or in a more verbose form. The formatting settings can be set in Visual Studio Code Settings. 
---

import VerboseTestsImg from '/resources/images/verbose.png';
import ShortTestsImg from '/resources/images/short.png';

# Formatting Tests

UnitTestBot supports two formatting styles for generated tests:

* **Short form**: so-called "one-liners", concise checks that are suitable for utility functions with many branches to cover;
* **Verbose form**: parameters declarations, expected and actual values, the function call are placed on separated lines (aka "Huawei's Five Rules"). Tests are easy to read and understand, but they occupy much more space in the code editor.

>✔️ **Statusbar**
>
>    You can **switch** between modes using the corresponding control in the VS Code Statusbar.

>✔️ **Independent formatting**
>
>    You can use different formatting for different files, it's not necessary to use the same style for all the source files in your project.

Below we attach the screenshots that show how the same tests look when they are generated with (and without) verbose mode.

* **Verbose**
    <img src={ VerboseTestsImg } className="usageGif"/>

* **Short**
   <img src={ ShortTestsImg } className="usageGif"/>