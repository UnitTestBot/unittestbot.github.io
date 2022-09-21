package org.utbot.site.pages;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;
import org.utbot.site.UTBotSiteTest;
import org.utbot.site.enums.Language;

import static com.codeborne.selenide.CollectionCondition.sizeGreaterThanOrEqual;
import static com.codeborne.selenide.Condition.*;
import static org.utbot.site.UTBotSite.*;
import static org.utbot.site.pages.DemoPage.*;

public class DemoPageTest extends UTBotSiteTest {

    @ParameterizedTest
    @CsvSource({  "C, 20",   "CPP, 4",   "JAVA, 7"  })
    public void checkExamplesArePresent(Language language, int minimalNumberOfExamples) {
        demoPage.open();
        languageDropdown.select(language.getName());
        examplesDropdown.field.hover();
        examplesDropdown.items.shouldHave(sizeGreaterThanOrEqual(minimalNumberOfExamples));
    }

    @ParameterizedTest
    @EnumSource
    public void checkSuccessfulTestGenerationForRandomExampleForLanguage(Language language) {
        demoPage.open();
        languageDropdown.select(language.getName());
        examplesDropdown.selectRandomItem();
        userCode.shouldNotBe(empty);
        generateAndRunTestsBtn.click();
        waitSpinnerDisappears();
        generatedTest.shouldHave(text("Test"));
        testGenerationResult.shouldNotHave(text("ERROR"));
        testGenerationResult.shouldHave(text("SUCCEEDED"));
    }
}
