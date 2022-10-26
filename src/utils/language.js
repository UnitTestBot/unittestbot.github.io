import dedent from "dedent";

export const Language = {
    C: 0,
    CPP: 1,
    JAVA: 2,
    PYTHON: 3,
    JS: 4,
    GO: 5,
}


const langToQueryMap = {
    [Language.C]: 'C',
    [Language.CPP]: 'Cpp',
    [Language.JAVA]: 'Java',
    [Language.PYTHON]: 'Python',
    [Language.JS]: 'JavaScript',
    [Language.GO]: 'Go'
}

export function languageToQuery(lang) {
    return langToQueryMap[lang]
}

const langToStringMap = {
    [Language.C]: 'C',
    [Language.CPP]: 'C++',
    [Language.JAVA]: 'Java',
    [Language.PYTHON]: 'Python',
    [Language.JS]: 'JavaScript',
    [Language.GO]: 'Go'
}

export function languageToString(lang) {
    return langToStringMap[lang]
}

const langToSnippetMap = {
    [Language.C]: dedent`#include <stdio.h>\n#include <string.h>\n#include <math.h>\n#include <stdlib.h>\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`,
    [Language.CPP]: dedent`#include <cmath>\n#include <cstring>\n\nusing namespace std;\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`,
    [Language.JAVA]: dedent`import java.util.*;\n\npublic class Solution {\n  // TODO: write your code here\n}`,
    [Language.PYTHON]: dedent`# Write your code here`,
    [Language.JS]: dedent`// Write your code here`,
    [Language.GO]: dedent`package simple\n\nfunc example() {\n  // Write your code here\n}`
}

export function languageToSnippet(lang) {
    return langToSnippetMap[lang]
}

const langToExamplesMap = {
    [Language.C]: require("../examples_json/examples_c.json"),
    [Language.CPP]: require("../examples_json/examples_cpp.json"),
    [Language.JAVA]: require("../examples_json/examples_java.json"),
    [Language.PYTHON]: require("../examples_json/examples_python.json"),
    [Language.JS]: require("../examples_json/examples_js.json"),
    [Language.GO]: require("../examples_json/examples_go.json")
}

export function languageToExamples(lang) {
    return langToExamplesMap[lang]
}

const langToHighlightMap = {
    [Language.C]: "cpp",
    [Language.CPP]: "cpp",
    [Language.JAVA]: "java",
    [Language.PYTHON]: "python",
    [Language.JS]: "javascript",
    [Language.GO]: "go"
}

export function languageToHighlight(lang) {
    return langToHighlightMap[lang]
}

export function languageIsExperimentalFeature(lang) {
    return lang === Language.CPP || lang === Language.GO || lang === Language.JS || lang === Language.PYTHON
}
