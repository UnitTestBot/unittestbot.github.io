export default {
  title: "UnitTestBot",
  base: "docs/",
  public: "./resources",
  ignore: ["**/blog/**", "readme.md", "README.md"],
  menu: [
    {
      name: "UnitTestBot Java/Kotlin",
      menu: [
        "Install or update plugin",
        "Check system requirements",
        "Generate tests with default configuration",
        "Fine-tune test generation",
        "Get use of test results",
      ],
    },
    {
      name: "UnitTestBot C/C++",
      menu: ["User guide", "VS Code plugin", "CLion plugin", "Stubs"],
    },
  ],
};
