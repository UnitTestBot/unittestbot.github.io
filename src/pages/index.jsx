import * as React from "react";
import { Container, } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";
import "./styles/index.css";

import watchDemoIcon from "../images/watch-demo-icon.png";
import githubIcon from "../images/github-trasparent.png";

import simpleGif from "../gifs/java/Simple.gif"
import fullClassGif from "../gifs/java/Full-Class.gif"
import commentsGif from "../gifs/java/Comments.png"
import mocksGif from "../gifs/java/Mocks.gif"
import falsePositiveGif from "../gifs/java/False-Positive.gif"

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const testsGenerationText = t("javaHome.testsGenText");
  const testsGenerationBlock = (
    <p className="contentText" dangerouslySetInnerHTML={{ __html: testsGenerationText }} />
  );

  const testsGenerationAdvantagesText = t("javaHome.testsGenAdvantagesText");
  const testsGenerationAdvantagesBlock = (
    <p dangerouslySetInnerHTML={{ __html: testsGenerationAdvantagesText }} />
  );

  const findBugsNooneCanText = t("javaHome.findBugsNooneCanText");
  const findBugsNooneCanTextBlock = (
    <p dangerouslySetInnerHTML={{ __html: findBugsNooneCanText }} />
  );

  const mocksText = t("javaHome.mocksText");
  const mocksBlock = (
    <p dangerouslySetInnerHTML={{ __html: mocksText }} />
  );

  const humanReadableText = t("javaHome.humanReadableText");
  const humanReadableBlock = (
    <p dangerouslySetInnerHTML={{ __html: humanReadableText }} />
  );

  const capableForEveryText = t("javaHome.capableForEveryText");
  const capableForEveryBlock = (
    <p dangerouslySetInnerHTML={{ __html: capableForEveryText }} />
  );


  return (
    <Layout isMainPage>
      <header className="mainHeader">
        <Container className="mainHeaderWrapper">
          <h1 className="title contentTitle">{t("javaHome.imagineTitle")}</h1>
          {testsGenerationBlock}
          <span className="mainPageButtons actions">
            <Link to="/utbot">
              <button className="demoButton">
                {t("javaHome.tryOnlineText")}
              </button>
            </Link>
            <Link to="/docs">
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
          <div style={{marginRight: "1.2rem"}}>
            <h3 className="title">{t("javaHome.testsGenAdvantagesTitlePart1")}</h3>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.testsGenAdvantagesTitlePart2")}</h3>
            {testsGenerationAdvantagesBlock}
            <button>
              {t("javaHome.checkGuideText")}
            </button>
          </div>
          <div className="gifWrapper">
            <img
              src={simpleGif}
              alt="Simple example"
            >
            </img>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="gifWrapper" style={{marginRight: "1.2rem"}}>
            <img
              src={fullClassGif}
              alt="Full class example"
            >
            </img>
          </div>
          <div>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.utbotAdvantagesTitle")}</h3>
            {testsGenerationAdvantagesBlock}
            <button>
              {t("javaHome.learnMoreText")}
            </button>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div style={{marginRight: "1.2rem"}}>
            <h3 className="title">{t("javaHome.findBugsNooneCanTitle")}</h3>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.eliminateFalsePositivesTitle")}</h3>
            {findBugsNooneCanTextBlock}
            <button>
              {t("javaHome.howToUseResultText")}
            </button>
          </div>
          <div className="gifWrapper">
            <img
              src={falsePositiveGif}
              alt="No false positives"
            >
            </img>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="gifWrapper" style={{marginRight: "1.2rem"}}>
            <img
              src={mocksGif}
              alt="Mocks example"
            >
            </img>
          </div>
          <div>
            <h3 className="title">{t("javaHome.mocksTitlePart1")}</h3>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.mocksTitlePart2")}</h3>
            {mocksBlock}
            <button>
              {t("javaHome.mockingSettingsText")}
            </button>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div style={{marginRight: "1.2rem"}}>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.humanReadableTitle")}</h3>
            {humanReadableBlock}
            <button>
              {t("javaHome.getBetterTestDescriptionText")}
            </button>
          </div>
          <div className="gifWrapper">
            <img
              src={commentsGif}
              alt="Human readable tests example"
            >
            </img>
          </div>
        </div>
        <div className="centeredContentWrapper">
          <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.capableForYourNeedText")}</h3>
          {capableForEveryBlock}
          <button>
            {t("javaHome.supportedTechnologiesText")}
          </button>
        </div>
      </Container>
    </Layout>
  );
};

export default withTrans(MainPage);
