---
name: Generate tests with default configuration
route: /docs/java/test-with-default-configuration-plugin
menu: UnitTestBot Java/Kotlin
parent: Documentation
---

With UnitTestBot you can generate tests

* for a package,
* for a single class or a set of classes,
* for a method or a set of methods.

## How to generate and run tests with default configuration

1. Open your Java project in IntelliJ IDEA.
2. Choose the required package, class or set of classes in the Project tool window.<br></br>
Right-click and choose **Generate Tests with UnitTestBot...** or press **Alt+Shift+U**.
3. Alternatively, in the Editor, place the caret at the required class or method.<br></br>
Press **Alt+Shift+U** or right-click and choose **Generate...** > **Tests with UnitTestBot**.
4. In the **Generate Tests with UnitTestBot** window tick the classes or methods you'd like to cover with tests and press **Generate Tests** or **Generate and Run**.<br></br>

Now you can see the resulting test class or classes in the Editor.

_Note:_ if you re-generate the test for a given class or method, it will erase the previously generated test for this unit. To prevent this, rename or move the tests you want to keep. For more information see [**Test sources root**](https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#test-sources-root).