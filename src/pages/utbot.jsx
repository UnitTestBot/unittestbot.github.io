import * as React from "react";
import {useState} from "react";
import Survey from "../components/survey/survey.jsx";
import {graphql, useStaticQuery} from 'gatsby';

import Layout from "../components/layout";
import {useTranslation} from "react-i18next";
import {Alert, Button, NavDropdown, OverlayTrigger, Spinner, Tooltip} from "react-bootstrap";
import "./styles/page.css";
import "./styles/contact.css";
import "./styles/utbot.css";
import dedent from "dedent";
import Editor from "@monaco-editor/react";
// Do not remove the import. It's used to render the page correctly.
import {highlight, languages} from "prismjs/components/prism-core";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";


require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");

const ResponseType = { run: "RUN", generation: "GENERATION" };

const snippetC = dedent`#include <stdio.h>\n#include <string.h>\n#include <math.h>\n#include <stdlib.h>\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`;

const snippetCpp = dedent`#include <iostream>\n#include <cmath>\n#include <cstring>\n\nusing namespace std;\n\nint foo() \n{\n  // TODO: write your code here\n  return 0;\n}`;

const snippetJava = dedent`import java.util.*;\n\npublic class Solution {\n  // TODO: write your code here\n}`;

const UTBotOnlinePage = () => {

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

    const examplesC = require("src/examples_json/examples_c.json");
    const examplesCpp = require("src/examples_json/examples_cpp.json");
    const examplesJava = require("src/examples_json/examples_java.json");

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
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.has("source")) {
            setSourceCode(urlParams.get("source"));
            setTestCode("");
            //setIsSurveyActive(false);
            //setSourceForSurvey("");
            //setIsSubmitted(false);
        }
        if (!urlParams.has("language")) {
            return;
        }
        if (urlParams.get("language") === "cpp") {
            setLanguage(2);
        }
        if (urlParams.get("language") === "java") {
            setLanguage(3);
        }
    }, []);

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
        let lang = language === 1 ? "C" : language === 2 ? "Cpp" : "Java";
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

    const langName = language === 1 ? "C" : language === 2 ? "C++" : "Java";

    const langHighlight = language === 3 ? "java" : "cpp";

    let monacoThemesDefined = false;
    const defineMonacoThemes = monaco => {
        if (monacoThemesDefined) {
            return;
        }
        monacoThemesDefined = true;
        monaco.editor.defineTheme("my-light", {
            base: "vs",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#f6f6f6",
                "minimap.background": "#f9f9f9"
            }
        });
    };
    const editorWillMountTemp = monaco => {
        defineMonacoThemes(monaco);
    };

    function CopyToClipboard(toCopy) {
        if  (toCopy != null) {
            const el = document.createElement(`textarea`)
            el.value = toCopy
            el.setAttribute(`readonly`, ``)
            el.style.position = `absolute`
            el.style.left = `-9999px`
            document.body.appendChild(el)
            el.select()
            document.execCommand(`copy`)
            document.body.removeChild(el)
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Share with friends!
        </Tooltip>
    );

    return (
        <Layout>
            <SEO title="UTBot Online"/>
            <div>
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
                                        <Button
                                            variant="light"
                                            style={{marginTop: "5px", marginBottom: "5px", width: "125px"}}
                                            /*onClick={/!*CopyToClipboard(typeof window != 'undefined' ?
                                                window.location.href : null)*!/}*/
                                        >Copy Link</Button>
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
                                        style={{marginTop: "5px", width: "50px"}}
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
                                            setLanguage(3);
                                            if (language !== 3) {
                                                setSourceCode(snippetJava)
                                            }
                                        }}
                                        > Java </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown
                                        title="Examples"
                                        show={showExamples}
                                        onClick={() => { }}
                                        onMouseEnter={showDropdownExamples}
                                        onMouseLeave={hideDropdownExamples}
                                        style={{marginTop: "5px"}}
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
                                    onChange={(value) => {
                                        setSourceCode(value.slice(0, 5000));
                                    }}
                                    value={sourceCode}
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
                                <Button variant="info" style={{marginTop: "5px", marginBottom: "5px", display: "inline-block"}}
                                        onClick={queryGenerateAndRunTests} disabled={isGeneratingAndRunning}>
                                    {isGeneratingAndRunning && <span>Generating and Running</span>}
                                    {!isGeneratingAndRunning && <span>Generate and Run Tests</span>}
                                    {isGeneratingAndRunning && <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />}
                                </Button>
                                {language === 2 && <Alert
                                    style={{marginTop: "5px", marginBottom: "5px", display: "inline-block"}}
                                    variant="warning"
                                    dangerouslySetInnerHTML={{ __html: t("utbot.alert") }}
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
                        {isSurveyActive && <Survey sourceCode={sourceForSurvey} testCode={testCode}
                                                   backendSurveyHost={backendSurveyHost}/>}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withTrans(UTBotOnlinePage);