package org.utbot.site.pages;

import org.junit.jupiter.api.Test;
import org.utbot.site.UTBotSiteTest;

import static com.codeborne.selenide.Condition.*;
import static org.utbot.site.UTBotSite.demoPage;
import static org.utbot.site.UTBotSite.startPage;
import static org.utbot.site.pages.StartPage.TRY_ONLINE_BTN_TEXT;

class StartPageTest extends UTBotSiteTest {

    @Test
    public void checkTryItOnlineBtn() {
        startPage.open();
        startPage.tryOnlineBtn
                .shouldBe(visible)
                .shouldBe(enabled)
                .shouldHave(exactText(TRY_ONLINE_BTN_TEXT))
                .click();
        demoPage.checkUrlMatches();
    }
}