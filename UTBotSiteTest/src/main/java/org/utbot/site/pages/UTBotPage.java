package org.utbot.site.pages;

import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.Selenide;

import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.url;

public abstract class UTBotPage {

    protected String url;

    UTBotPage(String url) {
        this.url = url;
    }

    public UTBotPage open() {
        Selenide.open(url);
        return this;
    }

    public void checkUrlMatches() {
        webdriver().shouldHave(url(Configuration.baseUrl + this.url));
    }
}
