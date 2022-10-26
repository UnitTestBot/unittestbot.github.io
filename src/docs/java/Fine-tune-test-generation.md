---
name: Fine-tune test generation
route: /docs/java/tune-test-generation-plugin
menu: UnitTestBot Java/Kotlin
parent: Documentation
---

## Сonfigure test generation according to your testing purposes

### Mocking settings

* Are your units [solitary or sociable](https://martinfowler.com/bliki/UnitTest.html)? Do you need mocking? What kind of 
  mocking if necessary?<br></br>
UnitTestBot uses [Mockito](https://site.mockito.org/) framework to control dependencies in 
  your code during testing. Choose what you need or rely on the defaults.

Note: currently, mocking is not available if you allocate all the test generation time for **Fuzzing** (see [**Test generation method**](https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#test-generation-method)).

*** 

#### Mocking strategy

In the **Generate Tests with UnitTestBot** window choose your **Mocking strategy**:

* **Do not mock** — If you want the unit under test to actually interact with its environment, mock nothing.
* **Mock everything outside the package** — Mock everything around the current package except the system classes.
* **Mock everything outside the class** — Mock everything around the target class except the system classes.

_Notes:_

This setting is inactive when you enable **Parameterized tests**.

Please remember, that **Classes to be forcedly mocked** are mocked even if you choose to mock nothing or any other 
mocking option. This behavior is necessary for correct test generation. See [**Force mocking static methods**](https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#force-mocking-static-methods) for more information.

***

#### Mock static methods

In the **Generate Tests with UnitTestBot** window you can choose to **Mock static methods**.

This option became available with Mockito 3.4.0. You can mock static methods only if you choose to mock either package or class environment. If you mock nothing, you won't be able to mock static methods as well, except those which are forcedly mocked.

***

#### Force mocking static methods

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and choose to **Force mocking static methods**.

When enabled, it overrides all the other mocking settings.

It will mock the methods inside the **Classes to be forcedly mocked** even if the Mockito is not installed.

Keep this setting enabled until you are a contributor and want to experiment with UnitTestBot code.

***

#### Classes to be forcedly mocked

If you chose to **Force mocking static methods**, you'll see four classes among **Classes to be forcedly mocked**, which are always here:

```java.util.Random```
```org.slf4j.Logger```
```org.slf4j.LoggerFactory```
```org.utbot.api.mock.UtMock```

They must be mocked for correct test generation.

You can add to this list. What should be forcedly mocked?

Even if you choose to mock nothing or mock the package environment, please make sure to forcedly mock _random number generators_, *I/O operation*s and _loggers_ to get valid test results.

***

* Do you need to execute a single test method multiple times with different parameters?

### Parameterized tests

You can enable Parameterized tests in the **Generate Tests with UnitTestBot** window.

In UnitTestBot parameterized tests are available only for JUnit 5 and TestNG chosen as the testing framework. UnitTestBot does not support parameterization for JUnit 4.

If this setting is enabled, you cannot choose **Mocking strategy**. **Do not mock** will be set as default.

***

* Would you like to collect and run tests using JUnit 4, JUnit 5 or TestNG?

### Testing framework

In the **Generate Tests with UnitTestBot** window choose the necessary **Testing framework**: **JUnit 4**, **JUnit 5** or **TestNG**.

If you do not have some of them on your computer, UnitTestBot will install them for you.

_Note:_ if you choose **JUnit 4,** you won't be able to activate **Parameterized tests**.

***

* Do you need to generate test methods in Kotlin for the source code written in Java or vice versa?

### Generated test language

By default, UnitTestBot detects your source code language and generates test methods accordingly.

In **File** > **Settings...** > **Tools** > **UnitTestBot** you can choose **Generated test language** to generate test methods in Java or Kotlin regardless of your source code language.

Generating tests in Kotlin is an experimental feature for now.

***

* Choose a folder to store your test code.

### Test sources root

For your first test generation with UnitTestBot choose the Test sources root manually in the **Generate Tests with UnitTestBot** window. UnitTestBot will remember your choice for future generations.

If you _re-generate_ the test for a given class or method, it will _erase the previously generated test_ for this unit. To prevent this, rename or move the tests you want to keep.

If the **Test sources root** directory _already contains hand-written tests_ or tests created with IntelliJ IDEA [Create Test](https://www.jetbrains.com/help/idea/create-tests.html) feature, make sure to rename or move these tests. UnitTestBot will _overwrite_ them, if they have the same names as the generated ones.

If your project is built with Maven or Gradle, you will be able to choose only the pre-defined **Test sources root** options from the drop-down list due to a strict project directory layout. If necessary, please [define custom **Test sources root** via Gradle or Maven](https://www.jetbrains.com/help/idea/testing.html#add-test-root) by modifying the build file. If you use IntelliJ IDEA native build system you can mark any directory as [Test Sources Root](https://www.jetbrains.com/help/idea/testing.html#add-test-root).

***

* Choose methods, classes or packages you want to cover with tests.

### Generate tests for

You can choose the scope for test generation both in the Project tool window or in the Editor.

* If you need to _generate tests for a package or a set of classes_, you can choose them all at once in the Project tool window.
* If you want to _specify methods_ to be covered with tests inside the given class, you can choose the class in the 
  Project tool window or, alternatively, place the caret at the required class or method right in the Editor.<br></br>
Then in the **Generate Tests with UnitTestBot** window tick the classes or methods you'd like to cover with tests.

***

## Experiment with test generation to reach higher coverage

There are ways to configure the inner process of test generation. They are mostly intended for contributors' use, but sometimes they may be helpful for common usage. Try them if you are not satisfied with test coverage. Please make sure you've _set everything back to defaults_ after finishing your experiments! Otherwise, you may have poor results during the next standard test generation.

Before configuring these settings, get to know the shortest UnitTestBot overview ever:

_UnitTestBot has a [dynamic symbolic execution](https://en.wikipedia.org/wiki/Symbolic_execution) engine in its core, complemented with a smart [fuzzing](https://en.wikipedia.org/wiki/Fuzzing) technique. Fuzzer tries to "guess" values, which allow UnitTestBot to enter as much branches as possible. Dynamic symbolic engine in its turn tries to "deduce" the same. UnitTestBot starts its work with a little bit of fuzzing, quickly generating inputs to cover some branches. Then the dynamic symbolic execution engine systematically explores the program's execution paths. It simultaneously executes the program on both the [concrete and the symbolic values](https://www.youtube.com/watch?v=QrtGOrSrVPQ&t=1008s). These two ways of execution guide each other, trying to reach all the possible branches._

***

### Hanging test timeout (milliseconds per method)

The symbolic engine generates parameters for the concrete execution — executing source code with concrete values. During concrete execution, if the engine enters an infinite loop or meet some other code conditions which take too much time to execute, the test being generated "hangs". It also means that the resulting test will hang when running and invoking the time-taking method.

Hanging test timeout is the limitation for the concrete execution process. Set this timeout to define which test is 
"hanging". Increase it to test the time-consuming method or decrease if the execution speed is critical for you.

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and set timeout in milliseconds — at 50 milliseconds intervals.

***

### Test generation timeout (seconds per class)

In the **Generate Tests with UnitTestBot** window you can set the timeout for _both the fuzzing process and the symbolic engine_ to generate tests for a given class.

***

### Test generation method

UnitTestBot starts its work with **Fuzzing**, switching to **Symbolic execution** later.

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and choose the proportion of time allocated for each of these two methods within **Test generation timeout** per class.

The closer the slider is to each method (**Fuzzing** or **Symbolic execution**) the more time you allocate for it.

***

## Configure test behavior and appearance

You can adjust the way the generated tests behave and look like.

***

### Tests with exceptions

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and choose the behavior for the tests with exceptions:

* **Fail** — tests that produce Runtime exceptions should fail.
* **Pass** — tests that produce Runtime exceptions should pass (by inserting throwable assertion).

***

### Overflow detection

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and choose the approach to overflows: whether UnitTestBot should **Ignore overflows** or **Treat overflows** as errors.

***

### Javadoc comment style

Go to **File** > **Settings...** > **Tools** > **UnitTestBot** and choose the style for test descriptions:

* **Structured via custom Javadoc tags** — UnitTestBot uses custom Javadoc tags to concisely describe test execution path.
* **Plain text** — UnitTestBot briefly describes test execution path in plain text.

For more information and illustrations see Read test descriptions.

_Note:_ currently, the feature works only for symbolic execution engine, so make sure you've allocated all the time to **Symbolic execution** in **Test generation method**.