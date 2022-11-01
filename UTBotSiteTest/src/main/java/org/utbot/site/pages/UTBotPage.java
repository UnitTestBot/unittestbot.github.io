package org.utbot.site.pages;

import com.codeborne.selenide.Selenide;

import static com.codeborne.selenide.Selenide.webdriver;
import static com.codeborne.selenide.WebDriverConditions.urlStartingWith;
import static com.codeborne.selenide.Configuration.baseUrl;

public abstract class UTBotPage {

    protected String url;

    UTBotPage(String url) {
        this.url = url;
    }

    public UTBotPage open() {
        Selenide.open(url);
        return this;
    }

    public void checkUrlStartsWith() {
        webdriver().shouldHave(urlStartingWith(baseUrl + this.url));
    }
}
