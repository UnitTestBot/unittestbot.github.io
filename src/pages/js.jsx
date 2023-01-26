import * as React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import Heading from "../components/heading/heading";
import Text from "../components/text/text";
import ExampleCard from "../components/cards/exampleCard/ExampleCard";
import SEO from "../components/seo/seo";
import ButtonGroup from "../components/buttonGroup/buttonGroup";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import withTrans from "../i18n/withTrans";

import * as styles from "./styles/index.module.css";
import * as stylesJs from "./styles/js.module.css";

import coverageGif from "../gifs/javascript/coverage.gif";
import typeInferenceGif from "../gifs/javascript/type-inference.gif";
import pluginAndCliGif from "../gifs/javascript/plugin-and-cli.gif";
import fuzzingHeuristicGif from "../gifs/javascript/fuzzing-heuristic.gif";

const JsPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout location={location}>
      <SEO title="JavaScript Page" />
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("jsHome.installGenerateAndRunTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText, stylesJs.info)}
          dangerouslySetInnerHTML={{
            __html: t("jsHome.installGenerateAndRunText"),
          }}
        />

        <ButtonGroup tryOnlineLink="/demo/?language=JavaScript&source=function%20fibonacci(n)%20%7B%0A%20%20if%20(n%20%3C%200%20%7C%7C%20n%20%3E%2025)%0A%20%20%20%20return%20-1%0A%0A%20%20if%20(n%20%3D%3D%3D%200)%0A%20%20%20%20return%200%0A%0A%20%20if%20(n%20%3D%3D%3D%201)%0A%20%20%20%20return%201%0A%0A%20%20return%20this.fib(n%20-%201)%20%2B%20this.fib(n%20-%202)%0A%7D" />
      </Container>

      <Container className={styles.examples}>
        <ExampleCard
          heading={<>{t("jsHome.bestGuessOfTypeTitle")}</>}
          text={t("jsHome.bestGuessOfTypeText")}
          gifSrc={typeInferenceGif}
          gifAlt="Type inference example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={<>{t("jsHome.randomValuesGenerationTitle")}</>}
          text={t("jsHome.randomValuesGenerationText")}
          gifSrc={fuzzingHeuristicGif}
          gifAlt="Fuzzing example"
          gifPlacement="left"
        />

        <ExampleCard
          heading={<>{t("jsHome.twoKindsOfDevelopersTitle")}</>}
          text={t("jsHome.twoKindsOfDevelopersText")}
          gifSrc={pluginAndCliGif}
          gifAlt="Plugin and CLI usage examples"
          gifPlacement="right"
        />

        <ExampleCard
          heading={<>{t("jsHome.viewCodeCoveredTitle")}</>}
          text={t("jsHome.viewCodeCoveredText")}
          gifSrc={coverageGif}
          gifAlt="Coverage example"
          gifPlacement="left"
        />
      </Container>
    </Layout>
  );
};

export default withTrans(JsPage);
