package org.utbot.site.elements;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.logevents.SelenideLog;
import com.codeborne.selenide.logevents.SelenideLogger;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.logevents.LogEvent.EventStatus.PASS;
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
        field.hover();
        items.filterBy(text(text)).first().click();
    }

    public void selectByIndex(int index) {
        field.hover();
        var itemToSelect = items.get(index);
        SelenideLog log = SelenideLogger.beginStep(String.join("","\"", itemToSelect.getText(), "\"", " example"), "selected");
        itemToSelect.click();
        SelenideLogger.commitStep(log, PASS);
    }

    public void selectRandomItem() {
        field.hover();
        int numberOfExamples = items.size();
        int index = random.nextInt(numberOfExamples);
        selectByIndex(index);
    }
}
