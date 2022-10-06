export default {
  themeConfig: {
    initialColorMode: 'dark',
  },
  title: "UnitTestBot",
  base: "docs/",
  public: "./resources",
  ignore: ["**/blog/**", "readme.md", "README.md"],
  menu: [
    {
      name: "UnitTestBot Java/Kotlin",
      menu: [
        "Welcome to UTBot plugin user guide",
        "Install or update plugin",
        "Check system requirements",
        "Generate tests with default configuration",
        "Fine-tune test generation",
        "Get use of test results",
      ],
    },
    {
      name: "UnitTestBot C/C++",
      menu: [
        "Install CLion plugin for UTBot",
        "Generating tests in CLion",
        "Step by step with CLion plugin",
      ],
    }
  ],
};