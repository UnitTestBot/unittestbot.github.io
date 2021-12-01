export default {
  title: "UnitTestBot",
  base: "docs/cpp/",
  public: "./resources",
  ignore: ["**/blog/**", "readme.md", "README.md"],
  menu: [
    {
      name: "General",
      menu: ["Introduction", "System Requirements"],
    },
    {
      name: "Installation",
      menu: [
        "Installing and Setting Up the UTBot Server",
        "Installing the VS Code Plugin",
        "UTBot Use Cases",
      ],
    },
    {
      name: "Usage",
      menu: [
        "Quickstart with UTBot Wizard",
        "Statusbar Icons",
        "VS Code Extension Settings",
        "Configuring Project",
        "Generating Tests",
        "Formatting Tests",
        "Run Generated Tests",
        "Stubs",
        "Command Line Interface",
      ],
    },
    {
      name: "Advanced",
      menu: [
        "How UTBot Works",
        "Supported Syntax",
        "Makefiles",
        "Symbolic Stdin",
        "UTBot Logging Principles",
      ],
    },
    "FAQ",
  ],
};
