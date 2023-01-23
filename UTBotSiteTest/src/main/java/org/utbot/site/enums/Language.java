package org.utbot.site.enums;

public enum Language {

    C("C"),
    CPP("C++"),
    JAVA("Java"),
    C_SHARP("C#"),
    GO("Go"),
    JAVASCRIPT("JavaScript"),
    PYTHON("Python");

    private final String language;
    Language(String language) {
        this.language = language;
    }

    public String getName() {
        return language;
    }
}
