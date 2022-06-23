export default {
  title: "UnitTestBot",
  base: "docs/cpp/",
  public: "./resources",
  ignore: ["**/blog/**", "readme.md", "README.md"],
  menu: [
    {
      name: "General",
      menu: [
        "Introduction",
        "System Requirements",
      ],
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
        "Step by step",
        "Quickstart with UTBot Wizard",
        "Statusbar Icons",
        "VS Code plugin",
        "VS Code Extension Settings",
        "Configuring Project",
        "Generating Tests",
        "Formatting Tests",
        "Run Generated Tests",
        "Stubs",
        "Command Line Interface",
        "Docker-free-wsl2",
      ],
    },
    {
      name: "Advanced",
      menu: [
        "How UTBot Works",
        "Makefiles",
        "Symbolic Stdin",
        "UTBot Logging Principles",
        "Targets",
        "Compile database",
        "Coverage",
        "Generating and running tests",
        "Incrementality",
        "Linking bitcode",
        "Preparing sources for KLEE",
        "Stubs inside",
        "KLEE patches",
        "Supported C Syntax",
        "Supported C++ Syntax",
      ],
    },
    {
      name: "Develop",
      menu: [
        "ToDo",
        "Troubleshooting",
      ],
    },
    "FAQ",
  ],
};