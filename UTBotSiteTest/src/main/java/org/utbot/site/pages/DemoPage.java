package org.utbot.site.pages;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import org.utbot.site.enums.Language;

import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.*;
import static org.utbot.site.UTBotSite.demoPage;
import static org.utbot.site.UTBotSite.random;

public class DemoPage extends UTBotPage{

    public DemoPage(String url) {
        super(url);
    }

    public static final String GENERATE_AND_RUN_TESTS_BTN_TEXT = "Generate and Run Tests";

    public final SelenideElement languageDropdown = $x(
            "//main//*[contains(@class, 'dropdown') and contains(@class, 'nav-item')  and (contains(.,'C') or contains(.,'Java'))]"
    );
    public final SelenideElement examplesDropdown = $x(
            "//main//*[contains(@class, 'dropdown') and contains(@class, 'nav-item') and contains(.,'Examples')]"
    );
    public final ElementsCollection examplesItems = $$x(
            "//main//*[contains(@class, 'dropdown') and contains(.,'Examples')]//*[contains(@class,'dropdown-item')]");
    public final SelenideElement generateAndRunTestsBtn = $(byText(GENERATE_AND_RUN_TESTS_BTN_TEXT));
    public final SelenideElement userCode = $x("//div[@data-keybinding-context='2']");
    public final SelenideElement generatedTest = $x("//div[@data-keybinding-context='3']");
    public final SelenideElement testGenerationResult = $x("//div[@data-keybinding-context='1']");

    public DemoPage selectLanguage(Language language) {
        languageDropdown.hover();
        languageDropdown.$(byText(language.getName())).click();
        return this;
    }

    public DemoPage selectExamplesItem(int index) {
        examplesDropdown.hover();
        examplesItems.get(index).click();
        return this;
    }

    public DemoPage selectRandomExamplesItem() {
        examplesDropdown.hover();
        int numberOfExamples = demoPage.examplesItems.size();
        int index = random.nextInt(numberOfExamples);
        selectExamplesItem(index);
        return this;
    }
}
