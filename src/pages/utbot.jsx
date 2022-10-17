import * as React from "react";
import {useState} from "react";
import {graphql, useStaticQuery} from 'gatsby';

import Layout from "../components/layout";
import {useTranslation} from "react-i18next";
import {Alert, Button, NavDropdown, OverlayTrigger, Spinner, Tooltip} from "react-bootstrap";
import "./styles/page.css";
import "./styles/utbot.css";
import dedent from "dedent";
import Editor from "@monaco-editor/react";
// Do not remove the import. It's used to render the page correctly.
import {highlight, languages} from "prismjs/components/prism-core";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

import copyLinkIcon from "../images/copy-link-icon.png";

require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");
require("prismjs/components/prism-python");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-go");

const ResponseType = { run: "RUN", generation: "GENERATION" };

const snippetC = dedent`#include <stdio.h>\n#include <string.h>\n#include <math.h>\n#include <stdlib.h>\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`;

const snippetCpp = dedent`#include <cmath>\n#include <cstring>\n\nusing namespace std;\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`;

const snippetJava = dedent`import java.util.*;\n\npublic class Solution {\n  // TODO: write your code here\n}`;

const snippetPython = dedent`# Write your code here`;

const snippetJavaScript = dedent`// Write your code here`;

const snippetGo = dedent`package simple\n\nfunc example() {\n  // Write your code here\n}`;

const UTBotOnlinePage = () => {

    const [href, setHref] = useState("");
    const [sourceCode, setSourceCode] = React.useState(snippetC);
    const [testCode, setTestCode] = React.useState("");
    const [showExamples, setShowExamples] = useState(false);
    const [language, setLanguage] = useState(1);
    const [showLanguages, setShowLanguages] = useState(false);
    const [detailsText, setDetailsText] = useState("");
    const [isSurveyActive, setIsSurveyActive] = useState(false);
    const [sourceForSurvey, setSourceForSurvey] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isGeneratingAndRunning, setIsGeneratingAndRunning] = useState(false);

    const examplesC = require("../examples_json/examples_c.json");
    const examplesCpp = require("../examples_json/examples_cpp.json");
    const examplesJava = require("../examples_json/examples_java.json");
    const examplesPython = require("../examples_json/examples_python.json");
    const examplesJavaScript = require("../examples_json/examples_js.json");
    const examplesGo = require("../examples_json/examples_go.json");

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          backend_host
        }
      }
    }
  `);
    const backendHost = data.site.siteMetadata.backend_host;
    // const backendSurveyHost = data.site.siteMetadata.backend_survey_host;

    React.useEffect(() => {
        const queryString = window.location.search;
        setHref(window.location.origin + window.location.pathname);
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.has("source")) {
            setSourceCode(urlParams.get("source"));
            setTestCode("");
            //setIsSurveyActive(false);
            //setSourceForSurvey("");
        }
        if (!urlParams.has("language")) {
            return;
        }
        if (urlParams.get("language") === "c") {
            setLanguage(1);
        }
        if (urlParams.get("language") === "cpp") {
            setLanguage(2);
        }
        if (urlParams.get("language") === "java") {
            setLanguage(3);
        }
        if (urlParams.get("language") === "python") {
            setLanguage(4);
        }
        if (urlParams.get("language") === "javascript") {
            setLanguage(5);
        }
        if (urlParams.get("language") === "go") {
            setLanguage(6);
        }
    }, []);

    function getLanguage(index) {
        switch(index) {
            case 1: return "C"
            case 2: return "Cpp"
            case 3: return "Java"
            case 4: return "Python"
            case 5: return "JavaScript"
            case 6: return "Go"
        }
    }

    function getLanguageName(index) {
        if (index === 2) {
            return "C++"
        }

        return getLanguage(index)
    }

    const url = `${href}?language=${getLanguage(language)}&source=${encodeURIComponent(sourceCode)}`;

    function copyLink() {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(url);
        }
    }


    const getDetailsOfSubResponse = (responseType, response) => {
        if (response?.statusCode?.localeCompare("SUCCEEDED") === 0) {
            return `TEST ${responseType}: SUCCEEDED\n` +
                (response.statusDetails ? response.statusDetails.join("\n") + "\n\n" : `${ResponseType}: no details\n\n`)
        }

        if (response?.statusCode) {
            return `TEST ${responseType}: ${response.statusCode}\n` +
                (response.statusDetails ? response.statusDetails.join("\n") + "\n\n" : "no details\n\n")
        }

        return `TEST ${responseType}: ERROR OCCURRED\n` +
            (response?.statusDetails ? response.statusDetails.join("\n") + "\n\n" : `${ResponseType}: no details\n\n`)
    };

    function queryGenerateAndRunTests() {
        console.log("Run and generate tests!!!");
        setIsGeneratingAndRunning(true);
        setDetailsText("");
        setTestCode("");
        setIsSurveyActive(false);
        setSourceForSurvey("");
        //setIsSubmitted(false);

        const host = backendHost;
        let lang = getLanguage(language);
        const req = `${host}/utbot-online/${lang}-playground/tests/`;
        const isInternetConnected = navigator.onLine;
        if (isInternetConnected) {
            fetch(req, {
                body: JSON.stringify({"snippet": sourceCode}),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
                .then(response => response.json())
                .then(response => JSON.stringify(response))
                .then(response => {
                    const obj = JSON.parse(response);
                    if (obj.statusCode.localeCompare("SUCCEEDED") === 0) {
                        setTestCode(obj.generationResponse.sourceFile);
                        setDetailsText(getDetailsOfSubResponse(ResponseType.generation, obj.generationResponse) +
                            getDetailsOfSubResponse(ResponseType.run, obj.runResponse))
                        // setIsSubmitted(false);
                        // setSourceForSurvey(sourceCode);
                    } else if (obj.statusCode) {
                        setTestCode("");
                        if (obj.generationResponse.statusCode.localeCompare("SUCCEEDED") === 0) {
                            setTestCode(obj.generationResponse.sourceFile);
                        }
                        setDetailsText(`Status Code: ${obj.statusCode}\n\n` +
                            (obj.statusDetails ? "Status details:\n" + obj.statusDetails.join("\n") + "\n\n" : "" ) +
                            getDetailsOfSubResponse(ResponseType.generation, obj.generationResponse) +
                            getDetailsOfSubResponse(ResponseType.run, obj.runResponse))
                        // setIsSubmitted(false);
                        // setSourceForSurvey("");
                    } else {
                        setTestCode("");
                        setDetailsText(obj)
                        // setIsSubmitted(false);
                        // setSourceForSurvey("");
                    }
                })
                .catch(err => {
                    setDetailsText(`Error message:\n${err.message}\n\nError stack:\n${err.stack}`);
                })
                .finally(function () {
                    setIsGeneratingAndRunning(false);
                });
        } else {
            setIsGeneratingAndRunning(false);
            const details = "No internet connection";
            setDetailsText(`ERROR: ${details}`);
        }
    }

    const showDropdownExamples = () => {
        setShowExamples(true);
    };
    const hideDropdownExamples = () => {
        setShowExamples(false);
    };

    const showDropdownLanguages = () => {
        setShowLanguages(true);
    };
    const hideDropdownLanguages = () => {
        setShowLanguages(false);
    };

    // TODO: move all string literals to locales/en/translations.json
    const {t, i18n} = useTranslation();

    let dropdownItems = null;
    if (language === 1) {
        dropdownItems = examplesC.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    } else if (language === 2) {
        dropdownItems = examplesCpp.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    }
    else if (language === 3) {
        dropdownItems = examplesJava.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    }
    else if (language === 4) {
        dropdownItems = examplesPython.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    }
    else if (language === 5) {
        dropdownItems = examplesJavaScript.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    }
    else if (language === 6) {
        dropdownItems = examplesGo.examples.map(exampleCode => {
            return (
                <NavDropdown.Item
                    onClick={() => {
                        setSourceCode(exampleCode.code);
                    }}> {exampleCode.name} </NavDropdown.Item>);
        });
    }

    const langName = getLanguageName(language)

    const langHighlight = language === 3 ? "java" : language === 4 ? "python" : language === 5 ? "javascript" : language === 6 ? "go" : "cpp";

    let monacoThemesDefined = false;
    const defineMonacoThemes = monaco => {
        if (monacoThemesDefined) {
            return;
        }
        monacoThemesDefined = true;
        monaco.editor.defineTheme("my-light", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#1f1f1f",
                "minimap.background": "#2c2b2b"
            }
        });
    };
    const editorWillMountTemp = monaco => {
        defineMonacoThemes(monaco);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Share with friends!
        </Tooltip>
    );

    return (
        <Layout>
            <SEO title="UTBot Online"/>
            <div style={{ overflowX: "auto", overflowY: "auto" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    marginLeft: "100px",
                    marginRight: "100px",
                    minWidth: "886px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            width: "100%",
                            minWidth: "440px",
                            marginRight: "3px",
                            flexDirection: "column"
                        }}>

                            <div
                                style={{
                                    marginTop: "20px",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                <div
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{show: 250, hide: 250}}
                                        overlay={renderTooltip}
                                    >
                                        {/* <Button
                                            variant="light"
                                            className="flatButton copyLinkButton"
                                            onClick={copyLink}
                                        >
                                          Copy Link
                                        </Button> */}
                                        <Button
                                            variant="light"
                                            className="flatButton copyLinkButton"
                                            onClick={copyLink}
                                        >
                                            <img src={copyLinkIcon} height="20" alt="Copy link icon" />
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                                <div
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "row"
                                    }}>

                                    <NavDropdown
                                        title={langName}
                                        show={showLanguages}
                                        onClick={() => { }}
                                        onMouseEnter={showDropdownLanguages}
                                        onMouseLeave={hideDropdownLanguages}
                                        style={{marginTop: "5px", width: "fit-content"}}
                                    >
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(1);
                                            if (language !== 1) {
                                                setSourceCode(snippetC);
                                            }

                                        }}
                                        > C </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(2);
                                            if (language !== 2) {
                                                setSourceCode(snippetCpp);
                                            }
                                        }}
                                        > C++ </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(6);
                                            if (language !== 6) {
                                                setSourceCode(snippetGo)
                                            }
                                        }}
                                        > Go </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(3);
                                            if (language !== 3) {
                                                setSourceCode(snippetJava)
                                            }
                                        }}
                                        > Java </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(5);
                                            if (language !== 5) {
                                                setSourceCode(snippetJavaScript)
                                            }
                                        }}
                                        > JavaScript </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => {
                                            setLanguage(4);
                                            if (language !== 4) {
                                                setSourceCode(snippetPython)
                                            }
                                        }}
                                        > Python </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown
                                        title="Examples"
                                        show={showExamples}
                                        onClick={() => { }}
                                        onMouseEnter={showDropdownExamples}
                                        onMouseLeave={hideDropdownExamples}
                                        style={{marginTop: "5px" }}
                                    >
                                        {dropdownItems}
                                    </NavDropdown>
                                </div>
                            </div>
                            <div style={{
                                height: "calc(70vh)",
                                minHeight: "300px",
                                // width: "45vw",
                                minWidth: "440px"
                            }}
                            >
                                <Editor
                                    theme="my-light"
                                    language={langHighlight}
                                    value={sourceCode}
                                    onChange={setSourceCode}
                                    beforeMount={editorWillMountTemp.bind(this)}
                                    options={{
                                        tabSize: 4,
                                        scrollBeyondLastLine: false,
                                        wordWrap: "on"
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{
                            width: "100%",
                            marginLeft: "3px",
                            flexDirection: "column",
                            minWidth: "440px",
                            height: "100%"
                        }}>
                            <div
                                style={{
                                    marginTop: "20px",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start"
                                }}>
                                <Button
                                    onClick={queryGenerateAndRunTests}
                                    disabled={isGeneratingAndRunning}
                                    className="flatButton generateAndRunTestsButton"
                                >
                                    {isGeneratingAndRunning && <span>Generating and Running</span>}
                                    {!isGeneratingAndRunning && <span>Generate and Run Tests</span>}
                                    {isGeneratingAndRunning &&
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    }
                                </Button>
                                {(language == 2 || language === 4 || language === 5 || language === 6) && <Alert
                                    style={{
                                        marginTop: "5px",
                                        marginBottom: "5px",
                                        display: "inline-block",
                                        color: "#FFFFFF",
                                        border: "none",
                                        backgroundColor: "transparent"
                                    }}
                                    variant="warning"
                                    dangerouslySetInnerHTML={{ __html: t("utbot.alertNew") }}
                                />}
                            </div>
                            <div style={{
                                height: "calc(70vh)",
                                minHeight: "300px",
                                minWidth: "440px"
                            }}
                            >
                                <Editor
                                    theme="my-light"
                                    language={langHighlight}
                                    value={testCode}
                                    beforeMount={editorWillMountTemp.bind(this)}
                                    options={{
                                        readOnly: true,
                                        scrollBeyondLastLine: false,
                                        wordWrap: "on"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{
                        marginTop: "1vh",
                        marginBottom: "1vh",
                        display: "flex",
                        minWidth: "886px",
                    }}>
                        {(isSurveyActive || isSubmitted) && <div style={{
                            width: "50%",
                            marginRight: "3px",
                            marginBottom: "0",
                            minWidth: "440px"
                        }}>
                            <Editor
                                theme="my-light"
                                language={langHighlight}
                                value={detailsText}
                                options={{
                                    minimap: {enabled: false},
                                    lineNumbers: "off",
                                    readOnly: true,
                                    scrollBeyondLastLine: false,
                                    wordWrap: "on"
                                }}
                            />
                        </div>}
                        {!(isSurveyActive || isSubmitted) && <div style={{
                            width: "100%",
                            marginRight: "3px",
                            minWidth: "440px",
                            height: "30vh",
                        }}>
                            <Editor
                                theme="my-light"
                                language={langHighlight}
                                value={detailsText}
                                options={{
                                    minimap: {enabled: false},
                                    lineNumbers: "off",
                                    readOnly: true,
                                    scrollBeyondLastLine: false,
                                    wordWrap: "on"
                                }}
                            />
                        </div>}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withTrans(UTBotOnlinePage);