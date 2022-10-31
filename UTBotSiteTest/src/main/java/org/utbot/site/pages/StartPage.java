package org.utbot.site.pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.*;

public class StartPage extends UTBotPage{

    public StartPage(String url) {
        super(url);
    }

    public static final String DEMO_BTN_TEXT = "Try UnitTestBot online demo";

    public final SelenideElement demoBtn = $x("//button[contains(.,'demo')]");

}
