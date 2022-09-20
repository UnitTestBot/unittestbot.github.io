package org.utbot.site;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.BeforeAll;

import com.codeborne.selenide.junit5.TextReportExtension;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith({TextReportExtension.class})
public abstract class UTBotSiteTest {

    @BeforeAll
    public static void setup() {
        Configuration.baseUrl = UTBotSite.SITE_URL;
        Configuration.browserSize = "1920x1080";
        Configuration.headless = true;
        //Configuration.reportsFolder = "build/reports/tests";
    }

}
