import React, { useState, useEffect } from "react";
import cn from "classnames";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import {
  Alert,
  Button as Btn,
  ButtonGroup as BtnGroup,
  NavDropdown,
  OverlayTrigger,
  Spinner,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "react-bootstrap";
import "./styles/page.css";
import * as stylesDesktop from "./styles/utbot-desktop.module.css";
import * as stylesMobile from "./styles/utbot-mobile.module.css";
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
// import Button from "../components/button";
import {
  Language as LanguageEnum,
  languageIsExperimentalFeature,
  languageToHighlight,
  languageToQuery,
  languageToString,
  languageToSnippet,
  languageToExamples,
} from "../utils/language";

import copyLinkIcon from "../images/copy-link-icon.png";
import codeIcon from "../images/code-icon.png";

require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");
require("prismjs/components/prism-python");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-go");

const ResponseType = { run: "RUN", generation: "GENERATION" };

const UTBotOnlinePage = () => {
  const [href, setHref] = useState("");
  const [sourceCode, setSourceCode] = React.useState(
    languageToSnippet(LanguageEnum.C)
  );
  const [testCode, setTestCode] = React.useState("");
  const [showExamples, setShowExamples] = useState(false);
  const [language, setLanguage] = useState(LanguageEnum.C);
  const [showLanguages, setShowLanguages] = useState(false);
  const [detailsText, setDetailsText] = useState("");
  const [isGeneratingAndRunning, setIsGeneratingAndRunning] = useState(false);

  // This is for mobile
  const [showCode, setShowCode] = useState(true);
  const [showTests, setShowTests] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const minDesktopWidth = 800;
  const minWidthGenerateAndRunTestsFullText = 400;

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

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const url = `${href}?language=${languageToQuery(
    language
  )}&source=${encodeURIComponent(sourceCode)}`;

  function copyLink() {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(url);
    }
  }

  const getDetailsOfSubResponse = (responseType, response) => {
    if (response?.statusCode?.localeCompare("SUCCEEDED") === 0) {
      return (
        `TEST ${responseType}: SUCCEEDED\n` +
        (response.statusDetails
          ? response.statusDetails.join("\n") + "\n\n"
          : `${ResponseType}: no details\n\n`)
      );
    }

    if (response?.statusCode) {
      return (
        `TEST ${responseType}: ${response.statusCode}\n` +
        (response.statusDetails
          ? response.statusDetails.join("\n") + "\n\n"
          : "no details\n\n")
      );
    }

    return (
      `TEST ${responseType}: ERROR OCCURRED\n` +
      (response?.statusDetails
        ? response.statusDetails.join("\n") + "\n\n"
        : `${ResponseType}: no details\n\n`)
    );
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
        body: JSON.stringify({ snippet: sourceCode }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then(response => response.json())
        .then(response => JSON.stringify(response))
        .then(response => {
          const obj = JSON.parse(response);
          if (obj.statusCode.localeCompare("SUCCEEDED") === 0) {
            if (window.screen.width < minDesktopWidth) {
              document.getElementById("testsButton").click();
            }
            setTestCode(obj.generationResponse.sourceFile);
            setDetailsText(
              getDetailsOfSubResponse(
                ResponseType.generation,
                obj.generationResponse
              ) + getDetailsOfSubResponse(ResponseType.run, obj.runResponse)
            );
          } else if (obj.statusCode) {
            setTestCode("");
            if (
              obj.generationResponse.statusCode.localeCompare("SUCCEEDED") === 0
            ) {
              setTestCode(obj.generationResponse.sourceFile);
              if (window.screen.width < minDesktopWidth) {
                document.getElementById("testsButton").click();
              }
            } else {
              if (window.screen.width < minDesktopWidth) {
                document.getElementById("infoButton").click();
              }
            }
            setDetailsText(
              `Status Code: ${obj.statusCode}\n\n` +
                (obj.statusDetails
                  ? "Status details:\n" + obj.statusDetails.join("\n") + "\n\n"
                  : "") +
                getDetailsOfSubResponse(
                  ResponseType.generation,
                  obj.generationResponse
                ) +
                getDetailsOfSubResponse(ResponseType.run, obj.runResponse)
            );
          } else {
            setTestCode("");
            setDetailsText(obj);
            if (window.screen.width < minDesktopWidth) {
              document.getElementById("infoButton").click();
            }
          }
        })
        .catch(err => {
          setDetailsText(
            `Error message:\n${err.message}\n\nError stack:\n${err.stack}`
          );
          if (window.screen.width < minDesktopWidth) {
            document.getElementById("infoButton").click();
          }
        })
        .finally(function () {
          setIsGeneratingAndRunning(false);
        });
    } else {
      setIsGeneratingAndRunning(false);
      const details = "No internet connection";
      setDetailsText(`ERROR: ${details}`);
      if (window.screen.width < minDesktopWidth) {
        document.getElementById("infoButton").click();
      }
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
          if (window.screen.width < minDesktopWidth) {
            hideDropdownExamples();
          }
        }}
      >
        {example.name}
      </NavDropdown.Item>
    );
  });

  const langName = languageToString(language);

  const langHighlight = languageToHighlight(language);

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
        "minimap.background": "#f9f9f9",
      },
    });
  };
  const editorWillMountTemp = monaco => {
    defineMonacoThemes(monaco);
  };

  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Share with friends!
    </Tooltip>
  );

  if (typeof window === `undefined`) {
    return <></>;
  }

  return (
    <Layout>
      <SEO title="UTBot Online" />
      {window.screen.width < minDesktopWidth && (
        <div className={stylesMobile.main}>
          <div className={cn(stylesMobile.toolbar, stylesMobile.topToolbar)}>
            <div className={stylesMobile.navDropdownContainer}>
              <NavDropdown
                className={stylesDesktop.dropdownLanguages}
                title={langName}
                show={showLanguages}
                onClick={() => {
                  setShowLanguages(!showLanguages);
                }}
              >
                {Object.values(LanguageEnum).map(lang => (
                  <NavDropdown.Item
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      if (language != lang) {
                        setSourceCode(languageToSnippet(lang));
                      }
                      hideDropdownLanguages();
                    }}
                  >
                    {languageToString(lang)}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                title="Examples"
                show={showExamples}
                onClick={() => {
                  setShowExamples(!showExamples);
                }}
                style={{ marginTop: "5px" }}
              >
                {dropdownItems}
              </NavDropdown>
            </div>
            <Btn
              className={stylesMobile.generateAndRunTestsButton}
              onClick={queryGenerateAndRunTests}
              disabled={isGeneratingAndRunning}
            >
              {isGeneratingAndRunning &&
                window.screen.width > minWidthGenerateAndRunTestsFullText && (
                  <span>{t("demo.generatingAndRunningTests")}</span>
                )}
              {!isGeneratingAndRunning &&
                window.screen.width > minWidthGenerateAndRunTestsFullText && (
                  <span>{t("demo.generateAndRunTests")}</span>
                )}
              {!isGeneratingAndRunning &&
                window.screen.width <= minWidthGenerateAndRunTestsFullText && (
                  <span>{t("demo.genAndRunTests")}</span>
                )}
              {isGeneratingAndRunning &&
                window.screen.width <= minWidthGenerateAndRunTestsFullText && (
                  <span>{t("demo.genAndRunningTests")}</span>
                )}
              {isGeneratingAndRunning && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Btn>
          </div>
          <div className={stylesMobile.toolbar}>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton
                id="codeButton"
                className={stylesMobile.btnBg}
                value={1}
                onClick={() => {
                  setShowCode(true);
                  setShowTests(false);
                  setShowInfo(false);
                }}
              >
                <img src={codeIcon} height="18" alt="Code icon" />
              </ToggleButton>
              <ToggleButton
                id="testsButton"
                className={stylesMobile.btnBg}
                value={2}
                onClick={() => {
                  setShowCode(false);
                  setShowTests(true);
                  setShowInfo(false);
                }}
              >
                Tests
              </ToggleButton>
              <ToggleButton
                id="infoButton"
                className={stylesMobile.btnBg}
                value={3}
                onClick={() => {
                  setShowCode(false);
                  setShowTests(false);
                  setShowInfo(true);
                }}
              >
                Info
              </ToggleButton>
            </ToggleButtonGroup>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 250 }}
              overlay={renderTooltip}
            >
              <Btn className={stylesMobile.btnBg} onClick={copyLink}>
                <img src={copyLinkIcon} height="17" alt="Copy link icon" />
              </Btn>
            </OverlayTrigger>
          </div>
          <div className={stylesMobile.codeEditor}>
            {showCode && (
              <Editor
                theme="my-light"
                language={langHighlight}
                value={sourceCode}
                onChange={setSourceCode}
                beforeMount={editorWillMountTemp.bind(this)}
                options={{
                  fontSize: 12,
                  minimap: { enabled: false },
                  tabSize: 4,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                }}
              />
            )}
            {showTests && (
              <Editor
                theme="my-light"
                language={langHighlight}
                value={testCode}
                beforeMount={editorWillMountTemp.bind(this)}
                options={{
                  fontSize: 12,
                  minimap: { enabled: false },
                  readOnly: true,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                }}
              />
            )}
            {showInfo && (
              <Editor
                theme="my-light"
                language={langHighlight}
                value={detailsText}
                options={{
                  fontSize: 12,
                  minimap: { enabled: false },
                  lineNumbers: "off",
                  readOnly: true,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                }}
              />
            )}
          </div>
        </div>
      )}
      {window.screen.width >= minDesktopWidth && (
        <div className={stylesDesktop.top}>
          <div className={stylesDesktop.main}>
            <div className={stylesDesktop.codeEditorsContainer}>
              <div
                className={cn(
                  stylesDesktop.codeEditorContainer,
                  stylesDesktop.sourceCodeEditorcontainer
                )}
              >
                <div className={stylesDesktop.toolbarContainer}>
                  <div>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 250 }}
                      overlay={renderTooltip}
                    >
                      <Btn
                        variant="dark"
                        className={stylesDesktop.copyLinkButton}
                        onClick={copyLink}
                      >
                        <img
                          src={copyLinkIcon}
                          height="18"
                          alt="Copy link icon"
                        />
                      </Btn>
                    </OverlayTrigger>
                  </div>
                  <div className={stylesDesktop.dropdownContainer}>
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
                            setLanguage(lang);
                            if (language != lang) {
                              setSourceCode(languageToSnippet(lang));
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
                      onClick={() => {}}
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
                      wordWrap: "on",
                    }}
                  />
                </div>
              </div>
              <div
                className={cn(
                  stylesDesktop.codeEditorContainer,
                  stylesDesktop.testsEditorContainer
                )}
              >
                <div
                  className={cn(
                    stylesDesktop.toolbarContainer,
                    stylesDesktop.generateAndRunTestsButtonContainer
                  )}
                >
                  <Btn
                    className={stylesDesktop.generateAndRunTestsButton}
                    onClick={queryGenerateAndRunTests}
                    disabled={isGeneratingAndRunning}
                  >
                    {isGeneratingAndRunning && (
                      <span>{t("demo.generatingAndRunningTests")}</span>
                    )}
                    {!isGeneratingAndRunning && (
                      <span>{t("demo.generateAndRunTests")}</span>
                    )}
                    {isGeneratingAndRunning && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </Btn>
                  {languageIsExperimentalFeature(language) && (
                    <p
                      className={stylesDesktop.alert}
                      dangerouslySetInnerHTML={{ __html: t("utbot.alertNew") }}
                    ></p>
                  )}
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
                      wordWrap: "on",
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
                    wordWrap: "on",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default withTrans(UTBotOnlinePage);
