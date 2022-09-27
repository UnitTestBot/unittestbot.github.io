package org.utbot.site.elements;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.logevents.SelenideLog;
import com.codeborne.selenide.logevents.SelenideLogger;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.logevents.LogEvent.EventStatus.IN_PROGRESS;
import static org.utbot.site.UTBotSite.random;

public class Dropdown {

    public final String name;
    public final SelenideElement field;
    public final ElementsCollection items;

    public Dropdown(String name, By fieldLocator, By itemLocator) {
        field = $(fieldLocator);
        items = field.$$(itemLocator);
        this.name = name;
    }

    public void select(String text) {
        field.hover();  //so that list is expanded
        SelenideLog log = SelenideLogger.beginStep(
                "dropdown " + name, String.join("", "select ", "\"", text, "\""));
        SelenideLogger.commitStep(log, IN_PROGRESS);
        items.filterBy(text(text)).first().click();
    }

    public void selectByIndex(int index) {
        field.hover(); //so that list is expanded
        SelenideElement itemToSelect = items.get(index);
        SelenideLog log = SelenideLogger.beginStep(
                "dropdown " + name, String.join("", "select ", "\"", itemToSelect.getText(), "\""));
        SelenideLogger.commitStep(log, IN_PROGRESS);
        itemToSelect.click();
    }

    public void selectRandomItem() {
        field.hover(); //so that items are loaded on UI
        int numberOfExamples = items.size();
        int index = random.nextInt(numberOfExamples);
        selectByIndex(index);
    }
}
