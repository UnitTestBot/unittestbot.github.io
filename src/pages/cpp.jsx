import * as React from "react";
import { Container, } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";
import "./styles/cpp.css";

import watchDemoIcon from "../images/watch-demo-icon.png";
import githubIcon from "../images/github-trasparent.png";

import testsGenerationExample from "../gifs/cpp/test-generation-example.gif"
import configurationGif from "../gifs/cpp/configuration-example.gif"
import vsCodeClionImage from "../images/cpp/vs-code-clion.png"

const CppPage = () => {
  const { t, i18n } = useTranslation();

  const utbotCppDescriptionText = t("cppHome.utbotCppDescriptionText");
  const utbotCppDescriptionBlock = (
    <p className="contentText" dangerouslySetInnerHTML={{ __html: utbotCppDescriptionText }} />
  );

  const whyUtbotIsCapableText = t("cppHome.whyUtbotIsCapableText");
  const whyUtbotIsCapableBlock = (
    <p style={{textAlign: "left !important"}} className="contentText" dangerouslySetInnerHTML={{ __html: whyUtbotIsCapableText }} />
  );

  const fixateCurrentBehaviorText = t("cppHome.fixateCurrentBehaviorText");
  const fixateCurrentBehaviorBlock = (
    <p dangerouslySetInnerHTML={{ __html: fixateCurrentBehaviorText }} />
  );

  const testsForAssertionsText = t("cppHome.testsForAssertionsText");
  const testsForAssertionsBlock = (
    <p dangerouslySetInnerHTML={{ __html: testsForAssertionsText }} />
  );

  const easilyConfigureText = t("cppHome.easilyConfigureText");
  const easilyConfigureBlock = (
    <p dangerouslySetInnerHTML={{ __html: easilyConfigureText }} />
  );

  const findUtbotForCppText = t("cppHome.findUtbotForCppText");
  const findUtbotForCppBlock = (
    <p dangerouslySetInnerHTML={{ __html: findUtbotForCppText }} />
  );

  const stubsText = t("cppHome.stubsText");
  const stubsBlock = (
    <p style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html: stubsText }} />
  );

  const supportedSyntaxText = t("cppHome.supportedSyntaxText");
  const supportedSyntaxBlock = (
    <p style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html: supportedSyntaxText }} />
  );

  const useBuildSystemText = t("cppHome.useBuildSystemText");
  const useBuildSystemBlock = (
    <p style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html: useBuildSystemText }} />
  );

  const googleTestFormatText = t("cppHome.googleTestFormatText");
  const googleTestFormatBlock = (
    <p style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html: googleTestFormatText }} />
  );

  return (
    <Layout>
      <ul role={'list'} className="ulButtons">
        <li>
          <Link to="/docs/cpp">
            <button style={{backgroundColor: "transparent", color: "#FFFFFF", border: "none"}} className="demoButton">
              {"User guide"}
            </button>
          </Link>
        </li>
        <li>
          <Link to="https://github.com/UnitTestBot/UTBotCpp/releases">
            <button style={{backgroundColor: "transparent", color: "#FFFFFF", border: "none"}} className="demoButton">
              {"Install from GitHub"}
            </button>
          </Link>
        </li>
      </ul>

      <header className="mainHeader">
        <Container className="mainHeaderWrapper">
          <h1 className="title contentTitle">{t("cppHome.utbotCppTitle")}</h1>
          <h1 className="title contentTitle">{t("cppHome.changesExperienceTitle")}</h1>
          {utbotCppDescriptionBlock}
          <span className="actions">
            <Link to="/utbot">
              <button className="demoButton">
                {t("javaHome.tryOnlineText")}
              </button>
            </Link>
            <Link to="https://www.youtube.com/watch?v=bDJyWEeYhvks">
              <button className="howWorksButton">
                <img
                  src={watchDemoIcon}
                  width="32"
                  height="30"
                />
                {t("javaHome.watchHowWorksText")}
              </button>
            </Link>
            <Link to="https://github.com/UnitTestBot">
              <button className="githubButton">
                <img
                  src={githubIcon}
                  width="50"
                  height="50"
                />
              </button>
            </Link>
          </span>
        </Container>
      </header>
      <Container className="snakeContainer">
        <div className="snakeElementsWrapper">
          <div className="rightMargin" style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <h3 style={{marginBottom: "1.2rem"}} className="title">{t("cppHome.perfectTestingTitle")}</h3>
              {whyUtbotIsCapableBlock}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <h3 style={{marginBottom: "1.2rem"}} className="title">{t("cppHome.checkForBugsTitle")}</h3>
              {fixateCurrentBehaviorBlock}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <h3 style={{marginBottom: "1.2rem"}} className="title">{t("cppHome.specifyTestingAreaTitle")}</h3>
              {testsForAssertionsBlock}
            </div>
          </div>
          <div className="gifWrapper" style={{marginRight: "1.2rem"}}>
            <img
              src={testsGenerationExample}
              alt="Tests generation example"
            >
            </img>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="gifWrapper rightMargin">
            <img
              src={configurationGif}
              alt="Configuration example"
            >
            </img>
          </div>
          <div>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("cppHome.easilyConfigureTitle")}</h3>
            {easilyConfigureBlock}
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="rightMargin">
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("cppHome.findUtbotForCppTitle")}</h3>
            {findUtbotForCppBlock}
          </div>
          <div className="gifWrapper">
            <img
              src={vsCodeClionImage}
              alt="UnitTestBot VS Code and CLion plugin example"
            >
            </img>
          </div>
        </div>
        <div className="containerOfFourTexts">
          <div style={{display: "flex", flexDirection: "column", maxWidth: "50vh"}}>
            <div style={{marginBottom: "0.5rem"}}>
              <h3 style={{marginBottom: "0.6rem"}}>{t("cppHome.stubsTitle")}</h3>
              {stubsBlock}
            </div>
            <div style={{marginBottom: "0.5rem"}}>
              <h3 style={{marginBottom: "0.6rem"}}>{t("cppHome.useBuildSystemTitle")}</h3>
              {useBuildSystemBlock}
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", maxWidth: "50vh"}}>
            <div style={{marginBottom: "0.5rem"}}>
              <h3 style={{marginBottom: "0.6rem"}}>{t("cppHome.supportedSyntaxTitle")}</h3>
              {supportedSyntaxBlock}
            </div>
            <div style={{marginBottom: "0.5rem"}}>
              <h3 style={{marginBottom: "0.6rem"}}>{t("cppHome.googleTestFormatTitle")}</h3>
              {googleTestFormatBlock}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default withTrans(CppPage);
