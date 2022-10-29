package org.utbot.site.enums;

public enum Language {

    C("C"),
    CPP("C++"),
    JAVA("Java"),
    GO("Go"),
    JAVASCRIPT("JavaScript"),
    PYTHON("Python"),
    KOTLIN("Kotlin");

    private final String language;
    Language(String language) {
        this.language = language;
    }

    public String getName() {
        return language;
    }
}
