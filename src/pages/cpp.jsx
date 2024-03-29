import * as React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import withTrans from "../i18n/withTrans";

import * as styles from "./styles/index.module.css";
import * as stylesCpp from "./styles/cpp.module.css";

import Heading from "../components/heading/heading";
import Text from "../components/text/text";
import InfoCard from "../components/cards/infoCard/infoCard";
import SEO from "../components/seo/seo";
import ButtonGroup from "../components/buttonGroup/buttonGroup";
import ExampleCard from "../components/cards/exampleCard/ExampleCard";

import testsGenerationExample from "../gifs/cpp/test-generation-example.gif";
import configurationGif from "../gifs/cpp/configuration-example.gif";
import vsCodeClionImage from "../images/cpp/vs-code-clion.png";

const CppPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout location={location}>
      <SEO title="C/C++ Page" />
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("cppHome.utbotCppTitle")} <br />
          {t("cppHome.changesExperienceTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText, stylesCpp.info)}
          dangerouslySetInnerHTML={{
            __html: t("cppHome.utbotCppDescriptionText"),
          }}
        />

        <ButtonGroup
          tryOnlineLink="/demo/?language=C&source=signed%20long%20long%20int%20max_long(long%20long%20a%2C%20signed%20long%20long%20b)%20%7B%0A%20%20if%20(a%20%3E%20b)%20%7B%0A%20%20%20%20return%20a%3B%0A%20%20%7D%0A%20%20return%20b%3B%0A%7D"
          demoVideoLink="https://www.youtube.com/watch?v=bDJyWEeYhvks"
          gitHubLink="https://github.com/UnitTestBot/UTBotCpp"
        />
      </Container>

      <Container className={styles.examples}>
        <ExampleCard
          heading={t("cppHome.perfectTestingTitle")}
          text={t("cppHome.whyUtbotIsCapableText")}
          gifSrc={testsGenerationExample}
          gifAlt="Tests generation example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={t("cppHome.easilyConfigureTitle")}
          text={t("cppHome.easilyConfigureText")}
          gifSrc={configurationGif}
          gifAlt="Configuration example"
          gifPlacement="left"
          textWrapperClassName="cardFlexStart5rem"
        />

        <ExampleCard
          heading={t("cppHome.findUtbotForCppTitle")}
          text={t("cppHome.findUtbotForCppText")}
          gifSrc={vsCodeClionImage}
          gifAlt="UnitTestBot VS Code and CLion plugin example"
          gifPlacement="right"
        />

        <div className={stylesCpp.infoContainer}>
          <InfoCard
            heading={t("cppHome.checkForBugsTitle")}
            text={t("cppHome.fixateCurrentBehaviorText")}
          />

          <InfoCard
            heading={t("cppHome.specifyTestingAreaTitle")}
            text={t("cppHome.testsForAssertionsText")}
          />

          <InfoCard
            heading={t("cppHome.stubsTitle")}
            text={t("cppHome.stubsText")}
          />

          <InfoCard
            heading={t("cppHome.supportedSyntaxTitle")}
            text={t("cppHome.supportedSyntaxText")}
          />

          <InfoCard
            heading={t("cppHome.useBuildSystemTitle")}
            text={t("cppHome.useBuildSystemText")}
          />

          <InfoCard
            heading={t("cppHome.googleTestFormatTitle")}
            text={t("cppHome.googleTestFormatText")}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default withTrans(CppPage);
