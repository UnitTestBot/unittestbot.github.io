import React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";
import * as styles from "./styles/index.module.css";
import "../utils/global.css";

import Button from "../components/button";
import Heading from "../components/heading";
import Text from "../components/text";
import ExampleCard from "../components/exampleCard/ExampleCard";

import watchDemoIcon from "../images/watch-demo-icon.png";
import githubIcon from "../images/github-transparent.png";

import simpleGif from "../gifs/java/Simple.gif";
import fullClassGif from "../gifs/java/Full-Class.gif";
import commentsGif from "../gifs/java/Comments.png";
import mocksGif from "../gifs/java/Mocks.gif";
import falsePositiveGif from "../gifs/java/False-Positive.gif";
import TextContent from "../components/exampleCard/textContent/TextContent";

const MainPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout isMainPage location={location}>
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("javaHome.imagineTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText)}
          dangerouslySetInnerHTML={{ __html: t("javaHome.testsGenText") }}
        />

        <div className={styles.actions}>
          <Link to="/utbot">
            <Button>{t("javaHome.tryOnlineText")}</Button>
          </Link>

          <Link
            to="https://youtu.be/p6GtTqc599Q"
            className={styles.howWorksLink}
          >
            <img src={watchDemoIcon} width="32" height="30" alt="Video icon" />
            {t("javaHome.watchHowWorksText")}
          </Link>

          <Link to="https://github.com/UnitTestBot/UTBotJava">
            <img src={githubIcon} width="50" height="50" alt="Github Logo" />
          </Link>
        </div>
      </Container>

      <Container className={styles.examples}>
        <ExampleCard
          heading={
            <>
              {t("javaHome.testsGenAdvantagesTitlePart1")} <br />
              {t("javaHome.testsGenAdvantagesTitlePart2")}
            </>
          }
          text={t("javaHome.testsGenAdvantagesText")}
          linkTo="/docs/java/test-with-default-configuration-plugin"
          linkText={t("javaHome.checkGuideText")}
          gifSrc={simpleGif}
          gifAlt="Simple example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={t("javaHome.utbotAdvantagesTitle")}
          text={t("javaHome.testsGenAdvantagesText")}
          linkTo="/docs/java/test-results-plugin#run-tests-and-view-coverage"
          linkText={t("javaHome.learnMoreText")}
          gifSrc={fullClassGif}
          gifAlt="Full class example"
          gifPlacement="left"
        />

        <ExampleCard
          heading={
            <>
              {t("javaHome.findBugsNooneCanTitle")} <br />
              {t("javaHome.eliminateFalsePositivesTitle")}
            </>
          }
          text={t("javaHome.findBugsNooneCanText")}
          linkTo="/docs/java/test-results-plugin"
          linkText={t("javaHome.howToUseResultText")}
          gifSrc={falsePositiveGif}
          gifAlt="No false positives"
          gifPlacement="right"
        />

        <ExampleCard
          heading={
            <>
              {t("javaHome.mocksTitlePart1")} <br />
              {t("javaHome.mocksTitlePart2")}
            </>
          }
          text={t("javaHome.mocksText")}
          linkTo="/docs/java/tune-test-generation-plugin#mocking-settings"
          linkText={t("javaHome.mockingSettingsText")}
          gifSrc={mocksGif}
          gifAlt="Mocks example"
          gifPlacement="left"
        />

        <ExampleCard
          heading={t("javaHome.humanReadableTitle")}
          text={t("javaHome.humanReadableText")}
          linkTo="/docs/java/tune-test-generation-plugin#read-test-description"
          linkText={t("javaHome.getBetterTestDescriptionText")}
          gifSrc={commentsGif}
          gifAlt="Human readable tests example"
          gifPlacement="right"
        />
        <TextContent
          heading={t("javaHome.capableForYourNeedText")}
          text={t("javaHome.capableForEveryText")}
          linkTo="/docs/java/check-requirements"
          linkText={t("javaHome.supportedTechnologiesText")}
          containerClassName="onlyText"
        />
      </Container>
    </Layout>
  );
};

export default withTrans(MainPage);

// const isActive = className => ({ isPartiallyCurrent }) => ({
//   className: className + (isPartiallyCurrent ? " active" : ""),
// });

// const CustomLink = ({ className, children, ...propsCustomLink }) => (
//   /* eslint-disable-next-line react/jsx-props-no-spreading */
//   <Link getProps={isActive(className)} {...propsCustomLink}>
//     {children}
//   </Link>
// );
