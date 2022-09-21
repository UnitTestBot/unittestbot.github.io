package org.utbot.site.pages;

import com.codeborne.selenide.SelenideElement;
import org.utbot.site.elements.Dropdown;

import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.*;

public class DemoPage extends UTBotPage{

    public DemoPage(String url) {
        super(url);
    }

    public static final String GENERATE_AND_RUN_TESTS_BTN_TEXT = "Generate and Run Tests";

    public static final Dropdown languageDropdown = new Dropdown("Language",
            byXpath("//main//div[contains(@class,'nav-item')][(.='C') or contains(.,'Java')]"),
            byClassName("dropdown-item"));

    public static final Dropdown examplesDropdown = new Dropdown("Examples",
            byXpath("//main//div[contains(@class, 'nav-item') and contains(.,'Examples')]"),
            byClassName("dropdown-item"));

    public static final SelenideElement generateAndRunTestsBtn = $(byText(GENERATE_AND_RUN_TESTS_BTN_TEXT));
    public static final SelenideElement userCode = $x("//div[@data-keybinding-context='2']");
    public static final SelenideElement generatedTest = $x("//div[@data-keybinding-context='3']");
    public static final SelenideElement testGenerationResult = $x("//div[@data-keybinding-context='1']");

}
