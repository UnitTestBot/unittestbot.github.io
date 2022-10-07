import * as React from "react";
import {Container, Nav} from "react-bootstrap";
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

const isActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? " active" : ""),
});

const CustomLink = ({ className, children, ...propsCustomLink }) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Link getProps={isActive(className)} {...propsCustomLink}>
    {children}
  </Link>
);

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const testsGenerationText = t("javaHome.testsGenText");
  const testsGenerationBlock = (
    <p className="contentText" style={{ margin: '0 auto', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: testsGenerationText }} />
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
      <header className="mainHeader" style={{marginTop: "4.5rem"}}>
        <Container style={{gap: "1.5rem", display: 'flex', flexDirection: 'column', }}>
          <h1 className="title contentTitle" style={{ margin: 0, textAlign: 'center' }}>{t("javaHome.imagineTitle")}</h1>
          {testsGenerationBlock}
          <span className="actions" style={{marginTop: 0}}>
            <Link to="/utbot">
              <button className="demoButton">
                {t("javaHome.tryOnlineText")}
              </button>
            </Link>
            <Link to="https://youtu.be/p6GtTqc599Q">
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
          <ul role={'list'} className="ulButtons" style={{marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, margin: 0}}>
            <li>
              <Link to="/docs/java/install-or-update-plugin">
                <button className="subheaderButton">
                  {"User guide"}
                </button>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/UnitTestBot/UTBotJava/releases">
                <button className="subheaderButton">
                  {"Install from GitHub"}
                </button>
              </Link>
            </li>
            <li>
              <Link to="https://plugins.jetbrains.com/plugin/19445-unittestbot">
                <button className="subheaderButton">
                  {"Install from JetBrains Marketplace"}
                </button>
              </Link>
            </li>
          </ul>
        </Container>
      </header>
      <Container className="snakeContainer">
        <div className="snakeElementsWrapper">
          <div className="rightMargin" style={{maxWidth: "30rem", margin: "0 auto"}}>
            <h3 className="title">{t("javaHome.testsGenAdvantagesTitlePart1")}</h3>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.testsGenAdvantagesTitlePart2")}</h3>
            {testsGenerationAdvantagesBlock}
            <Link to="/docs/java/test-with-default-configuration-plugin">
              <button>
                {t("javaHome.checkGuideText")}
              </button>
            </Link>
          </div>
          <div className="gifWrapper">
            <img
              src={simpleGif}
              alt="Simple example"
            >
            </img>
          </div>
        </div>
        <div className="snakeElementsReverseWrapper">
          <div className="gifWrapper rightMargin">
            <img
              src={fullClassGif}
              alt="Full class example"
            >
            </img>
          </div>
          <div>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.utbotAdvantagesTitle")}</h3>
            {testsGenerationAdvantagesBlock}
            <Link to="/docs/java/test-results-plugin#run-tests-and-view-coverage">
              <button>
                {t("javaHome.learnMoreText")}
              </button>
            </Link>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="rightMargin">
            <h3 className="title">{t("javaHome.findBugsNooneCanTitle")}</h3>
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.eliminateFalsePositivesTitle")}</h3>
            {findBugsNooneCanTextBlock}
            <Link to="/docs/java/test-results-plugin">
              <button>
                {t("javaHome.howToUseResultText")}
              </button>
            </Link>
          </div>
          <div className="gifWrapper">
            <img
              src={falsePositiveGif}
              alt="No false positives"
            >
            </img>
          </div>
        </div>
        <div className="snakeElementsReverseWrapper">
          <div className="gifWrapper rightMargin">
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
            <Link to="/docs/java/tune-test-generation-plugin#mocking-settings">
              <button>
                {t("javaHome.mockingSettingsText")}
              </button>
            </Link>
          </div>
        </div>
        <div className="snakeElementsWrapper">
          <div className="rightMargin">
            <h3 style={{marginBottom: "1.2rem"}} className="title">{t("javaHome.humanReadableTitle")}</h3>
            {humanReadableBlock}
            <Link to="/docs/java/tune-test-generation-plugin#read-test-description">
              <button>
                {t("javaHome.getBetterTestDescriptionText")}
              </button>
            </Link>
          </div>
          <div className="gifWrapper">
            <img
              src={commentsGif}
              alt="Human readable tests example"
            >
            </img>
          </div>
        </div>
        <div className="leftContentWrapper" style={{maxWidth: "400px", marginBottom: "30px"}}>
          <h3 style={{marginBottom: "1.2rem"}}>{t("javaHome.capableForYourNeedText")}</h3>
          {capableForEveryBlock}
          <Link to="/docs/java/check-requirements">
            <button>
              {t("javaHome.supportedTechnologiesText")}
            </button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default withTrans(MainPage);
