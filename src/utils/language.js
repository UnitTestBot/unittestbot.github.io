import dedent from "dedent";

export const Language = {
  C: 0,
  CPP: 1,
  CSHARP: 2,
  GO: 3,
  JAVA: 4,
  JS: 5,
  PYTHON: 6,
};

const langToQueryMap = {
  [Language.C]: "C",
  [Language.CPP]: "Cpp",
  [Language.JAVA]: "Java",
  [Language.PYTHON]: "Python",
  [Language.JS]: "JavaScript",
  [Language.GO]: "Go",
  [Language.CSHARP]: "CSharp",
};

export function languageToQuery(lang) {
  return langToQueryMap[lang];
}

const langToStringMap = {
  [Language.C]: "C",
  [Language.CPP]: "C++",
  [Language.JAVA]: "Java",
  [Language.PYTHON]: "Python",
  [Language.JS]: "JavaScript",
  [Language.GO]: "Go",
  [Language.CSHARP]: "C#",
};

export function languageToString(lang) {
  return langToStringMap[lang];
}

const langToSnippetMap = {
  [Language.C]: dedent`#include <stdio.h>\n#include <string.h>\n#include <math.h>\n#include <stdlib.h>\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`,
  [Language.CPP]: dedent`#include <cmath>\n#include <cstring>\n\nusing namespace std;\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`,
  [Language.JAVA]: dedent`import java.util.*;\n\npublic class Solution  {\n  public int max(int a, int b)  {\n    if (a > b) {\n      return a;\n    }\n\n    return b;\n  }\n}`,
  [Language.PYTHON]: dedent`def max(a, b):\n  if a > b:\n    return a\n  return b`,
  [Language.JS]: dedent`function max(a, b) {\n  if (a > b) {\n    return a\n  }\n\n  return b\n}`,
  [Language.GO]: dedent`package simple\n\nfunc example() {\n  // Write your code here\n}`,
  [Language.CSHARP]: dedent`public static class Solution {\n  public static int Max(int a, int b) {\n    if (a > b) {\n      return a;\n    }\n\n    return b;\n  }\n}`,
};

export function languageToSnippet(lang) {
  return langToSnippetMap[lang];
}

const langToExamplesMap = {
  [Language.C]: require("../examples_json/examples_c.json"),
  [Language.CPP]: require("../examples_json/examples_cpp.json"),
  [Language.JAVA]: require("../examples_json/examples_java.json"),
  [Language.PYTHON]: require("../examples_json/examples_python.json"),
  [Language.JS]: require("../examples_json/examples_js.json"),
  [Language.GO]: require("../examples_json/examples_go.json"),
  [Language.CSHARP]: require("../examples_json/examples_csharp.json"),
};

export function languageToExamples(lang) {
  return langToExamplesMap[lang];
}

const langToHighlightMap = {
  [Language.C]: "cpp",
  [Language.CPP]: "cpp",
  [Language.JAVA]: "java",
  [Language.PYTHON]: "python",
  [Language.JS]: "javascript",
  [Language.GO]: "go",
  [Language.CSHARP]: "csharp",
};

export function languageToHighlight(lang) {
  return langToHighlightMap[lang];
}

export function languageIsExperimentalFeature(lang) {
  return (
    lang === Language.CPP ||
    lang === Language.GO ||
    lang === Language.JS ||
    lang === Language.PYTHON
  );
}
