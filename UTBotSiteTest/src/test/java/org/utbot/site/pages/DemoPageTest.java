package org.utbot.site.pages;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;
import org.utbot.site.UTBotSiteTest;
import org.utbot.site.enums.Language;

import static com.codeborne.selenide.CollectionCondition.sizeGreaterThanOrEqual;
import static com.codeborne.selenide.Condition.*;
import static org.utbot.site.UTBotSite.*;

public class DemoPageTest extends UTBotSiteTest {

    @ParameterizedTest
    @CsvSource({  "C, 20",   "CPP, 4",   "JAVA, 7"  })
    public void checkExamplesArePresent(Language language, int minimalNumberOfExamples) {
        demoPage.open();
        demoPage.selectLanguage(language);
        demoPage.examplesDropdown.hover();
        demoPage.examplesItems.shouldHave(sizeGreaterThanOrEqual(minimalNumberOfExamples));
    }

    @ParameterizedTest
    @EnumSource
    public void checkSuccessfulTestGenerationForRandomExampleForLanguage(Language language) {
        demoPage.open();
        demoPage.selectLanguage(language)
                .selectRandomExamplesItem();
        demoPage.userCode.shouldNotBe(empty);
        demoPage.generateAndRunTestsBtn.click();
        waitSpinnerDisappears();
        demoPage.generatedTest.shouldHave(partialText("Test"));
        demoPage.testGenerationResult.shouldNot(matchText("ERROR"));
        demoPage.testGenerationResult.shouldHave(text("SUCCEEDED"));
    }
}
