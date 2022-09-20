package org.utbot.site.pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.*;

public class StartPage extends UTBotPage{

    public StartPage(String url) {
        super(url);
    }

    public static final String TRY_ONLINE_BTN_TEXT = "Try online";

    public final SelenideElement tryOnlineBtn = $x("//a[@href='/utbot/']");

}
