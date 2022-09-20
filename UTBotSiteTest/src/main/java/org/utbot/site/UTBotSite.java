package org.utbot.site;

import com.codeborne.selenide.SelenideElement;
import org.utbot.site.pages.DemoPage;
import org.utbot.site.pages.StartPage;

import java.time.Duration;
import java.util.Random;

import static com.codeborne.selenide.Condition.disappear;
import static com.codeborne.selenide.Selenide.$;

public class UTBotSite {

    public static final Duration DEFAULT_TEST_GENERATION_TIMEOUT = Duration.ofSeconds(60000);

    public static final Random random = new Random();

    public static final String SITE_URL = "https://www.utbot.org";

    public static StartPage startPage = new StartPage("");
    public static DemoPage demoPage = new DemoPage("/utbot/");

    public static SelenideElement spinner = $(".spinner-border");

    public static void waitSpinnerDisappears() {
        spinner.should(disappear, DEFAULT_TEST_GENERATION_TIMEOUT);
    }
}
