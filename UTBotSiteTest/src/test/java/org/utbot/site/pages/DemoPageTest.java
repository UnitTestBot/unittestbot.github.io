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
    @CsvSource({ "C, 20", "CPP, 4", "C_SHARP, 6", "JAVA, 13", "GO, 7", "JAVASCRIPT, 6", "PYTHON, 7" })
    public void checkExamplesArePresent(Language language, int minimalNumberOfExamples) {
        demoPage.open();
        languageDropdown.select(language.getName());
        examplesDropdown.field.hover();
        examplesDropdown.items.shouldHave(
                sizeGreaterThanOrEqual(minimalNumberOfExamples));
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
        testGenerationResult
                .shouldHave(text("SUCCEEDED"));
    }

    @ParameterizedTest
    @EnumSource
    public void checkSuccessfulTestGenerationForAllExamplesForLanguage(Language language) {
        demoPage.open();
        languageDropdown.select(language.getName());
        examplesDropdown.field.click();
        int size = examplesDropdown.items.size();
        for (int i = 0; i < size; i++) {
            examplesDropdown.selectByIndex(i);
            userCode.shouldNotBe(empty);
            generateAndRunTestsBtn.click();
            waitSpinnerDisappears();
            generatedTest.shouldHave(text("Test"));
            testGenerationResult
                    .shouldHave(text("TEST GENERATION: SUCCEEDED"));
        }
    }
}
