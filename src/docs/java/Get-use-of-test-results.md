---
name: Get use of test results
route: /docs/java/test-results-plugin
menu: UnitTestBot Java/Kotlin
parent: Documentation
---

## Explore test suites

### View clustered tests

Even before running tests you have them clustered into suites. Analyze them to see failing tests, explicitly thrown exceptions, and successful executions.

These clusters are marked as _Regions_ in test source code. To view all the suites at once and navigate between them, press **Alt+7** to open Structure tool window.

The typical suites are:

* _Fuzzer_
* _Symbolic execution engine_,

each divided into:

* _Successful executions_
* _Explicitly thrown unchecked exceptions_
* _Error suite_

Find the example below:

![Screenshot of UnitTestBot output structure, showing test suites](https://user-images.githubusercontent.com/64418523/193044976-c83d990d-3211-4218-8c07-57d628ccf780.PNG)

Dive into these suites to find test methods with detailed descriptions.

### Read test descriptions

![test_description](https://user-images.githubusercontent.com/64418523/193581057-28d22cbf-d6c4-4c2e-b628-f0d84b991366.PNG)

Each test contains:

#### Javadoc comment

Briefly describes test execution path.

* See [Javadoc comment style](https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#javadoc-comment-style) for configuring the **Plain 
  text** or **Structured via custom Javadoc tags** view.
* [Render Javadoc comments](https://www.jetbrains.com/help/idea/working-with-code-documentation.html#toggle-rendered-view) to get more clear and structured view.
* Jump to the method-under-test right from the comment.

#### Testing framework annotations

Provide a super short test method description inside:

* For JUnit 5: `@DisplayName("\<short description>")`
* For TestNG: `@Test(description = "\<short description>")`<br></br>
(For JUnit 4 there are no descriptions right in the annotations.)

   _**Disabled (or sandboxed) tests**_

   Sometimes the tests with the _@Disabled_ annotation and a stack trace appear in the output:

   ```@Disabled("Disabled due to sandbox")```

   Keep calm: it is a feature, not a bug. These tests were sandboxed, i.e. interrupted, because they tried to execute potentially unsafe code.

   The most common forbidden actions are:
   * working with files (read, write, create, delete),
   * connecting to sockets,
   * invoking ```System.exit()```,
   * accessing system properties or JVM properties,
   * using reflection.

   You can **add permissions** in ```~\.utbot\sandbox.policy```. Create this file manually.

   You can refer to the [Full list of permissions](https://docs.oracle.com/javase/1.5.0/docs/guide/security/spec/security-spec.doc3.html).

   If you are sure you want the code to be executed as is (**including the unsafe operations!**) you can **turn sandboxing off**: add ```AllPermission```  to ```~\.utbot\sandbox.policy```. Be careful!

   If you remove the _@Disabled_ annotation and run the test, it will be run without creating a sandbox.

#### Test method name

Usually looks like ```testMethodUnderTestName```. Sometimes it is accompanied by explanatory supplements: e.g., 
```ByFuzzer```, ```ReturnsOneWithCornerCase```, or others.

#### Test method body

You can jump to the method-under-test from here too.

### Run tests and view coverage

There are multiple ways to [run tests](https://www.jetbrains.com/help/idea/performing-tests.html) and [view coverage](https://www.jetbrains.com/help/idea/code-coverage.html) in IntelliJ IDEA. All of them apply to UnitTestBot results — feel free to choose any.

If you are not satisfied with coverage, try to [Experiment with test generation](Fine-tune test generation.md#Experiment with test generation to reach higher coverage).

### Get SARIF reports

#### What is SARIF?

It is the _Static Analysis Results Interchange Format_ — a standard, JSON-based format for the output of static analysis tools.

Every static analysis tool has its own output format, and these formats usually have little in common. SARIF provides a universal output format, which makes it possible to create common tooling, such as viewers, bug filers, metrics calculators, etc.

For more information please refer to [SARIF Tutorials](https://github.com/microsoft/sarif-tutorials/blob/main/README.md).

#### How to get SARIF report in UnitTestBot

By default, UnitTestBot creates SARIF reports for each test generation.

_Note:_ if you enable **Parameterized tests** in the **Generate Tests with UnitTestBot** window, SARIF report is unavailable for now.

You can find SARIF reports in the ```resources``` directory near **Test sources root**. 