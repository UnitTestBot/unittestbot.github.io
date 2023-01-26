import React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import withTrans from "../i18n/withTrans";
import * as styles from "./styles/index.module.css";
import "../utils/global.css";

import Heading from "../components/heading/heading";
import Text from "../components/text/text";
import ExampleCard from "../components/cards/exampleCard/ExampleCard";
import SEO from "../components/seo/seo";
import TextContent from "../components/textContent/TextContent";
import ButtonGroup from "../components/buttonGroup/buttonGroup";

import simpleGif from "../gifs/java/Simple.gif";
import fullClassGif from "../gifs/java/Full-Class.gif";
import commentsGif from "../gifs/java/Comments.png";
import mocksGif from "../gifs/java/Mocks.gif";
import falsePositiveGif from "../gifs/java/False-Positive.gif";

const MainPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout isMainPage location={location}>
      <SEO title="Java/Kotlin Page" />
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("javaHome.imagineTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText)}
          dangerouslySetInnerHTML={{ __html: t("javaHome.testsGenText") }}
        />

        <ButtonGroup
          tryOnlineLink="/demo/?language=Java&source=public%20class%20Recursion%20%7B%0A%20%20public%20int%20factorial(int%20n)%20%7B%0A%20%20%20%20if%20(n%20%3C%200)%20%7B%0A%20%20%20%20%20%20throw%20new%20IllegalArgumentException()%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20if%20(n%20%3D%3D%200)%20%7B%0A%20%20%20%20%20%20return%201%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20n%20*%20factorial(n%20-%201)%3B%0A%20%20%7D%0A%7D%0A"
          demoVideoLink="https://youtu.be/p6GtTqc599Q"
          gitHubLink="https://github.com/UnitTestBot/UTBotJava"
        />
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
          text={t("javaHome.utbotAdvantagesText")}
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
