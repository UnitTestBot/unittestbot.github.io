import React, { useState } from "react";
import cn from "classnames";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { Alert, NavDropdown, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import "./styles/page.css";
import "./styles/utbot.css";
import * as stylesDesktop from "./styles/utbot-desktop.module.css"
import Editor from "@monaco-editor/react";
// Do not remove the import. It's used to render the page correctly.
import { highlight, languages } from "prismjs/components/prism-core";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

//import { LanguageDropdown } from "../components/languages-dropdown";
import Button from "../components/button";
import { Language as LanguageEnum, languageIsExperimentalFeature, languageToHighlight, languageToQuery, languageToString, languageToSnippet, languageToExamples } from "../utils/language"

import copyLinkIcon from "../images/copy-link-icon.png";

require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");
require("prismjs/components/prism-python");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-go");

const ResponseType = { run: "RUN", generation: "GENERATION" };

const UTBotOnlinePage = () => {

    const [href, setHref] = useState("");
    const [sourceCode, setSourceCode] = React.useState(languageToSnippet(LanguageEnum.C));
    const [testCode, setTestCode] = React.useState("");
    const [showExamples, setShowExamples] = useState(false);
    const [language, setLanguage] = useState(LanguageEnum.C);
    const [showLanguages, setShowLanguages] = useState(false);
    const [detailsText, setDetailsText] = useState("");
    const [isGeneratingAndRunning, setIsGeneratingAndRunning] = useState(false);

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

    React.useEffect(() => {
        const queryString = window.location.search;
        setHref(window.location.origin + window.location.pathname);
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.has("source")) {
            setSourceCode(urlParams.get("source"));
            setTestCode("");
        }

        if (!urlParams.has("language")) {
            return;
        }

        var requestLanguage = Object.values(LanguageEnum).map(lang => languageToQuery(lang) === urlParams.get("language"));

        if (requestLanguage != null) {
            setLanguage(requestLanguage.index)
        }
    }, []);

    const url = `${href}?language=${languageToQuery(language)}&source=${encodeURIComponent(sourceCode)}`;

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

        const host = backendHost;
        let lang = languageToQuery(language);
        const req = `${host}/utbot-online/${lang}-playground/tests/`;
        const isInternetConnected = navigator.onLine;
        if (isInternetConnected) {
            fetch(req, {
                body: JSON.stringify({ "snippet": sourceCode }),
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
                    } else if (obj.statusCode) {
                        setTestCode("");
                        if (obj.generationResponse.statusCode.localeCompare("SUCCEEDED") === 0) {
                            setTestCode(obj.generationResponse.sourceFile);
                        }
                        setDetailsText(`Status Code: ${obj.statusCode}\n\n` +
                            (obj.statusDetails ? "Status details:\n" + obj.statusDetails.join("\n") + "\n\n" : "") +
                            getDetailsOfSubResponse(ResponseType.generation, obj.generationResponse) +
                            getDetailsOfSubResponse(ResponseType.run, obj.runResponse))
                    } else {
                        setTestCode("");
                        setDetailsText(obj)
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

    const { t, i18n } = useTranslation();

    let dropdownItems = languageToExamples(language).examples.map(example => {
        return (
            <NavDropdown.Item
                onClick={() => {
                    setSourceCode(example.code);
                }}
            > 
                {example.name} 
            </NavDropdown.Item>
        );
    });

    const langName = languageToString(language)

    const langHighlight = languageToHighlight(language)

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
            <SEO title="UTBot Online" />
            <div className={stylesDesktop.top}>
                <div className={stylesDesktop.main}>
                    <div className={stylesDesktop.codeEditorsContainer}>
                        <div className={cn(stylesDesktop.codeEditorContainer, stylesDesktop.sourceCodeEditorcontainer)}>
                            <div className={stylesDesktop.copyLinkButtonContainer}>
                                <div className={stylesDesktop.copyLinkButton}>
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 250 }}
                                            overlay={renderTooltip}
                                        >
                                        <Button
                                            variant="outline"
                                            onClick={copyLink}
                                        >
                                            <img src={copyLinkIcon} height="20" alt="Copy link icon" />
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                                <div className={stylesDesktop.dropdownLanguagesContainer}>
                                    <NavDropdown
                                        className={stylesDesktop.dropdownLanguages}
                                        title={langName}
                                        show={showLanguages}
                                        onMouseEnter={showDropdownLanguages}
                                        onMouseLeave={hideDropdownLanguages}
                                    >
                                        {Object.values(LanguageEnum).map(lang => (
                                            <NavDropdown.Item 
                                                key={lang} 
                                                onClick={() => {
                                                    setLanguage(lang)
                                                    if (language != lang) {
                                                        setSourceCode(languageToSnippet(lang))
                                                    }
                                                }}
                                            > 
                                                {languageToString(lang)} 
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Examples"
                                        show={showExamples}
                                        onClick={() => { }}
                                        onMouseEnter={showDropdownExamples}
                                        onMouseLeave={hideDropdownExamples}
                                        style={{ marginTop: "5px" }}
                                    >
                                        {dropdownItems}
                                    </NavDropdown>
                                </div>
                            </div>
                            <div className={stylesDesktop.codeEditor}>
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
                        <div className={cn(stylesDesktop.codeEditorContainer, stylesDesktop.testsEditorContainer)}>
                            <div className={stylesDesktop.generateAndRunTestsButton}>
                                <Button
                                    variant="outline"
                                    onClick={queryGenerateAndRunTests}
                                    disabled={isGeneratingAndRunning}
                                >
                                {isGeneratingAndRunning && <span>Generating & Running</span>}
                                {!isGeneratingAndRunning && <span>Generate & Run Tests</span>}
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
                                {languageIsExperimentalFeature(language) && <Alert
                                    className={stylesDesktop.alert}
                                    variant="warning"
                                    dangerouslySetInnerHTML={{ __html: t("utbot.alertNew") }}
                                />}
                            </div>
                            <div className={stylesDesktop.codeEditor}>
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
                    <div className={stylesDesktop.detailsContainer}>
                        <div className={stylesDesktop.detailsEditor}>
                            <Editor
                                theme="my-light"
                                language={langHighlight}
                                value={detailsText}
                                options={{
                                    minimap: { enabled: false },
                                    lineNumbers: "off",
                                    readOnly: true,
                                    scrollBeyondLastLine: false,
                                    wordWrap: "on"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withTrans(UTBotOnlinePage);