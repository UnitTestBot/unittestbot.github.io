package org.utbot.site.pages;

import org.junit.jupiter.api.Test;
import org.utbot.site.UTBotSiteTest;

import static com.codeborne.selenide.Condition.*;
import static org.utbot.site.UTBotSite.demoPage;
import static org.utbot.site.UTBotSite.startPage;
import static org.utbot.site.pages.StartPage.DEMO_BTN_TEXT;

class StartPageTest extends UTBotSiteTest {

    @Test
    public void checkTryItOnlineBtn() {
        startPage.open();
        startPage.demoBtn
                .shouldBe(visible)
                .shouldBe(enabled)
                .shouldHave(exactText(DEMO_BTN_TEXT))
                .click();
        demoPage.checkUrlStartsWith();
    }
}