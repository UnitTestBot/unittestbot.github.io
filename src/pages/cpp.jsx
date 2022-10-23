import * as React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";
import * as styles from "./styles/index.module.css";
import * as stylesCpp from "./styles/cpp.module.css";

import Button from "../components/button";
import Heading from "../components/heading";
import Text from "../components/text";
import ExampleCard from "../components/example-card";
import InfoCard from "../components/info-card";

import watchDemoIcon from "../images/watch-demo-icon.png";
import githubIcon from "../images/github-transparent.png";

import testsGenerationExample from "../gifs/cpp/test-generation-example.gif";
import configurationGif from "../gifs/cpp/configuration-example.gif";
import vsCodeClionImage from "../images/cpp/vs-code-clion.png";

const CppPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout location={location}>
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading>
          {t("cppHome.utbotCppTitle")} <br />
          {t("cppHome.changesExperienceTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText, stylesCpp.info)}
          dangerouslySetInnerHTML={{ __html: t("cppHome.utbotCppDescriptionText") }}
        />

        <div className={styles.actions}>
          <Link to="/utbot">
            <Button>{t("javaHome.tryOnlineText")}</Button>
          </Link>

          <Link
            to="https://www.youtube.com/watch?v=bDJyWEeYhvks"
            className={styles.howWorksLink}
          >
            <img
              src={watchDemoIcon}
              width="32"
              height="30"
              alt="Youtube Logo"
            />
            {t("javaHome.watchHowWorksText")}
          </Link>

          <Link to="https://github.com/UnitTestBot/UTBotCpp">
            <img src={githubIcon} width="50" height="50" alt="Github Logo" />
          </Link>
        </div>
      </Container>

      <Container className={styles.examples}>
        <div className={stylesCpp.info}>
          <InfoCard
            heading={t("cppHome.perfectTestingTitle")}
            text={t("cppHome.whyUtbotIsCapableText")}
          />

          <InfoCard
            heading={t("cppHome.checkForBugsTitle")}
            text={t("cppHome.fixateCurrentBehaviorText")}
          />
        </div>

        <ExampleCard
          heading={t("cppHome.specifyTestingAreaTitle")}
          text={t("cppHome.testsForAssertionsText")}
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
        />

        <ExampleCard
          heading={t("cppHome.findUtbotForCppTitle")}
          text={t("cppHome.findUtbotForCppText")}
          gifSrc={vsCodeClionImage}



          gifAlt="UnitTestBot VS Code and CLion plugin example"
          gifPlacement="right"
        />

        <div className={stylesCpp.info}>
          <InfoCard
            heading={t("cppHome.stubsTitle")}
            text={t("cppHome.stubsText")}
          />

          <InfoCard
            heading={t("cppHome.useBuildSystemTitle")}
            text={t("cppHome.useBuildSystemText")}
          />

          <InfoCard
            heading={t("cppHome.supportedSyntaxTitle")}
            text={t("cppHome.supportedSyntaxText")}
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
