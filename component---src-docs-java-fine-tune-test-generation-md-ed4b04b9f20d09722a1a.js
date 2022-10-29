"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[87],{52586:function(t,e,o){o.r(e),o.d(e,{_frontmatter:function(){return l},default:function(){return m}});var n=o(87462),a=o(63366),r=(o(15007),o(64983)),s=o(23017),i=(o(13879),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/java/Fine-tune-test-generation.md"}});var c={_frontmatter:l},p=s.Z;function m(t){var e=t.components,o=(0,a.Z)(t,i);return(0,r.kt)(p,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"сonfigure-test-generation-according-to-your-testing-purposes"},"Сonfigure test generation according to your testing purposes"),(0,r.kt)("h3",{id:"mocking-settings"},"Mocking settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are your units ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/UnitTest.html"},"solitary or sociable"),"? Do you need mocking? What kind of\nmocking if necessary?",(0,r.kt)("br",null),"\nUnitTestBot uses ",(0,r.kt)("a",{parentName:"li",href:"https://site.mockito.org/"},"Mockito")," framework to control dependencies in\nyour code during testing. Choose what you need or rely on the defaults.")),(0,r.kt)("p",null,"Note: currently, mocking is not available if you allocate all the test generation time for ",(0,r.kt)("strong",{parentName:"p"},"Fuzzing")," (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#test-generation-method"},(0,r.kt)("strong",{parentName:"a"},"Test generation method")),")."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"mocking-strategy"},"Mocking strategy"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window choose your ",(0,r.kt)("strong",{parentName:"p"},"Mocking strategy"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not mock")," — If you want the unit under test to actually interact with its environment, mock nothing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mock everything outside the package")," — Mock everything around the current package except the system classes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mock everything outside the class")," — Mock everything around the target class except the system classes.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notes:")),(0,r.kt)("p",null,"This setting is inactive when you enable ",(0,r.kt)("strong",{parentName:"p"},"Parameterized tests"),"."),(0,r.kt)("p",null,"Please remember, that ",(0,r.kt)("strong",{parentName:"p"},"Classes to be forcedly mocked")," are mocked even if you choose to mock nothing or any other\nmocking option. This behavior is necessary for correct test generation. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UnitTestBot/UTBotJava/wiki/Fine-tune-test-generation#force-mocking-static-methods"},(0,r.kt)("strong",{parentName:"a"},"Force mocking static methods"))," for more information."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"mock-static-methods"},"Mock static methods"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window you can choose to ",(0,r.kt)("strong",{parentName:"p"},"Mock static methods"),"."),(0,r.kt)("p",null,"This option became available with Mockito 3.4.0. You can mock static methods only if you choose to mock either package or class environment. If you mock nothing, you won't be able to mock static methods as well, except those which are forcedly mocked."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"force-mocking-static-methods"},"Force mocking static methods"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and choose to ",(0,r.kt)("strong",{parentName:"p"},"Force mocking static methods"),"."),(0,r.kt)("p",null,"When enabled, it overrides all the other mocking settings."),(0,r.kt)("p",null,"It will mock the methods inside the ",(0,r.kt)("strong",{parentName:"p"},"Classes to be forcedly mocked")," even if the Mockito is not installed."),(0,r.kt)("p",null,"Keep this setting enabled until you are a contributor and want to experiment with UnitTestBot code."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"classes-to-be-forcedly-mocked"},"Classes to be forcedly mocked"),(0,r.kt)("p",null,"If you chose to ",(0,r.kt)("strong",{parentName:"p"},"Force mocking static methods"),", you'll see four classes among ",(0,r.kt)("strong",{parentName:"p"},"Classes to be forcedly mocked"),", which are always here:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Random"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"org.slf4j.Logger"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"org.slf4j.LoggerFactory"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"org.utbot.api.mock.UtMock")),(0,r.kt)("p",null,"They must be mocked for correct test generation."),(0,r.kt)("p",null,"You can add to this list. What should be forcedly mocked?"),(0,r.kt)("p",null,"Even if you choose to mock nothing or mock the package environment, please make sure to forcedly mock ",(0,r.kt)("em",{parentName:"p"},"random number generators"),", ",(0,r.kt)("em",{parentName:"p"},"I/O operation"),"s and ",(0,r.kt)("em",{parentName:"p"},"loggers")," to get valid test results."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do you need to execute a single test method multiple times with different parameters?")),(0,r.kt)("h3",{id:"parameterized-tests"},"Parameterized tests"),(0,r.kt)("p",null,"You can enable Parameterized tests in the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window."),(0,r.kt)("p",null,"In UnitTestBot parameterized tests are available only for JUnit 5 and TestNG chosen as the testing framework. UnitTestBot does not support parameterization for JUnit 4."),(0,r.kt)("p",null,"If this setting is enabled, you cannot choose ",(0,r.kt)("strong",{parentName:"p"},"Mocking strategy"),". ",(0,r.kt)("strong",{parentName:"p"},"Do not mock")," will be set as default."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Would you like to collect and run tests using JUnit 4, JUnit 5 or TestNG?")),(0,r.kt)("h3",{id:"testing-framework"},"Testing framework"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window choose the necessary ",(0,r.kt)("strong",{parentName:"p"},"Testing framework"),": ",(0,r.kt)("strong",{parentName:"p"},"JUnit 4"),", ",(0,r.kt)("strong",{parentName:"p"},"JUnit 5")," or ",(0,r.kt)("strong",{parentName:"p"},"TestNG"),"."),(0,r.kt)("p",null,"If you do not have some of them on your computer, UnitTestBot will install them for you."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")," if you choose ",(0,r.kt)("strong",{parentName:"p"},"JUnit 4,")," you won't be able to activate ",(0,r.kt)("strong",{parentName:"p"},"Parameterized tests"),"."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do you need to generate test methods in Kotlin for the source code written in Java or vice versa?")),(0,r.kt)("h3",{id:"generated-test-language"},"Generated test language"),(0,r.kt)("p",null,"By default, UnitTestBot detects your source code language and generates test methods accordingly."),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," you can choose ",(0,r.kt)("strong",{parentName:"p"},"Generated test language")," to generate test methods in Java or Kotlin regardless of your source code language."),(0,r.kt)("p",null,"Generating tests in Kotlin is an experimental feature for now."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose a folder to store your test code.")),(0,r.kt)("h3",{id:"test-sources-root"},"Test sources root"),(0,r.kt)("p",null,"For your first test generation with UnitTestBot choose the Test sources root manually in the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window. UnitTestBot will remember your choice for future generations."),(0,r.kt)("p",null,"If you ",(0,r.kt)("em",{parentName:"p"},"re-generate")," the test for a given class or method, it will ",(0,r.kt)("em",{parentName:"p"},"erase the previously generated test")," for this unit. To prevent this, rename or move the tests you want to keep."),(0,r.kt)("p",null,"If the ",(0,r.kt)("strong",{parentName:"p"},"Test sources root")," directory ",(0,r.kt)("em",{parentName:"p"},"already contains hand-written tests")," or tests created with IntelliJ IDEA ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/create-tests.html"},"Create Test")," feature, make sure to rename or move these tests. UnitTestBot will ",(0,r.kt)("em",{parentName:"p"},"overwrite")," them, if they have the same names as the generated ones."),(0,r.kt)("p",null,"If your project is built with Maven or Gradle, you will be able to choose only the pre-defined ",(0,r.kt)("strong",{parentName:"p"},"Test sources root")," options from the drop-down list due to a strict project directory layout. If necessary, please ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/testing.html#add-test-root"},"define custom ",(0,r.kt)("strong",{parentName:"a"},"Test sources root")," via Gradle or Maven")," by modifying the build file. If you use IntelliJ IDEA native build system you can mark any directory as ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/testing.html#add-test-root"},"Test Sources Root"),"."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose methods, classes or packages you want to cover with tests.")),(0,r.kt)("h3",{id:"generate-tests-for"},"Generate tests for"),(0,r.kt)("p",null,"You can choose the scope for test generation both in the Project tool window or in the Editor."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you need to ",(0,r.kt)("em",{parentName:"li"},"generate tests for a package or a set of classes"),", you can choose them all at once in the Project tool window."),(0,r.kt)("li",{parentName:"ul"},"If you want to ",(0,r.kt)("em",{parentName:"li"},"specify methods")," to be covered with tests inside the given class, you can choose the class in the\nProject tool window or, alternatively, place the caret at the required class or method right in the Editor.",(0,r.kt)("br",null),"\nThen in the ",(0,r.kt)("strong",{parentName:"li"},"Generate Tests with UnitTestBot")," window tick the classes or methods you'd like to cover with tests.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"experiment-with-test-generation-to-reach-higher-coverage"},"Experiment with test generation to reach higher coverage"),(0,r.kt)("p",null,"There are ways to configure the inner process of test generation. They are mostly intended for contributors' use, but sometimes they may be helpful for common usage. Try them if you are not satisfied with test coverage. Please make sure you've ",(0,r.kt)("em",{parentName:"p"},"set everything back to defaults")," after finishing your experiments! Otherwise, you may have poor results during the next standard test generation."),(0,r.kt)("p",null,"Before configuring these settings, get to know the shortest UnitTestBot overview ever:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"UnitTestBot has a ",(0,r.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Symbolic_execution"},"dynamic symbolic execution")," engine in its core, complemented with a smart ",(0,r.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Fuzzing"},"fuzzing"),' technique. Fuzzer tries to "guess" values, which allow UnitTestBot to enter as much branches as possible. Dynamic symbolic engine in its turn tries to "deduce" the same. UnitTestBot starts its work with a little bit of fuzzing, quickly generating inputs to cover some branches. Then the dynamic symbolic execution engine systematically explores the program\'s execution paths. It simultaneously executes the program on both the ',(0,r.kt)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=QrtGOrSrVPQ&t=1008s"},"concrete and the symbolic values"),". These two ways of execution guide each other, trying to reach all the possible branches.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hanging-test-timeout-milliseconds-per-method"},"Hanging test timeout (milliseconds per method)"),(0,r.kt)("p",null,'The symbolic engine generates parameters for the concrete execution — executing source code with concrete values. During concrete execution, if the engine enters an infinite loop or meet some other code conditions which take too much time to execute, the test being generated "hangs". It also means that the resulting test will hang when running and invoking the time-taking method.'),(0,r.kt)("p",null,'Hanging test timeout is the limitation for the concrete execution process. Set this timeout to define which test is\n"hanging". Increase it to test the time-consuming method or decrease if the execution speed is critical for you.'),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and set timeout in milliseconds — at 50 milliseconds intervals."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"test-generation-timeout-seconds-per-class"},"Test generation timeout (seconds per class)"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Generate Tests with UnitTestBot")," window you can set the timeout for ",(0,r.kt)("em",{parentName:"p"},"both the fuzzing process and the symbolic engine")," to generate tests for a given class."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"test-generation-method"},"Test generation method"),(0,r.kt)("p",null,"UnitTestBot starts its work with ",(0,r.kt)("strong",{parentName:"p"},"Fuzzing"),", switching to ",(0,r.kt)("strong",{parentName:"p"},"Symbolic execution")," later."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and choose the proportion of time allocated for each of these two methods within ",(0,r.kt)("strong",{parentName:"p"},"Test generation timeout")," per class."),(0,r.kt)("p",null,"The closer the slider is to each method (",(0,r.kt)("strong",{parentName:"p"},"Fuzzing")," or ",(0,r.kt)("strong",{parentName:"p"},"Symbolic execution"),") the more time you allocate for it."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configure-test-behavior-and-appearance"},"Configure test behavior and appearance"),(0,r.kt)("p",null,"You can adjust the way the generated tests behave and look like."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tests-with-exceptions"},"Tests with exceptions"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and choose the behavior for the tests with exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fail")," — tests that produce Runtime exceptions should fail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pass")," — tests that produce Runtime exceptions should pass (by inserting throwable assertion).")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overflow-detection"},"Overflow detection"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and choose the approach to overflows: whether UnitTestBot should ",(0,r.kt)("strong",{parentName:"p"},"Ignore overflows")," or ",(0,r.kt)("strong",{parentName:"p"},"Treat overflows")," as errors."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"javadoc-comment-style"},"Javadoc comment style"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"File")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings...")," > ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"UnitTestBot")," and choose the style for test descriptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Structured via custom Javadoc tags")," — UnitTestBot uses custom Javadoc tags to concisely describe test execution path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Plain text")," — UnitTestBot briefly describes test execution path in plain text.")),(0,r.kt)("p",null,"For more information and illustrations see Read test descriptions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")," currently, the feature works only for symbolic execution engine, so make sure you've allocated all the time to ",(0,r.kt)("strong",{parentName:"p"},"Symbolic execution")," in ",(0,r.kt)("strong",{parentName:"p"},"Test generation method"),"."))}m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/java/Fine-tune-test-generation.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-java-fine-tune-test-generation-md-ed4b04b9f20d09722a1a.js.map