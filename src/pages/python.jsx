import * as React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import Button from "../components/button";
import Heading from "../components/heading";
import Text from "../components/text";
import ExampleCard from "../components/exampleCard/ExampleCard";
import SEO from "../components/seo";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";

import * as styles from "./styles/index.module.css";
import * as stylesPython from "./styles/python.module.css";

import fuzzingImg from "../images/python/fuzzing.png";
import pluginCliImg from "../images/python/plugin-cli.jpg";
import pytestUnittestImg from "../images/python/pytest-unittest.jpg";
import typeInferenceImg from "../images/python/type-inference.png";

import assertionsGif from "../gifs/python/assertions.gif";
import testGenerationGif from "../gifs/python/test-generation.gif";

const PythonPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout location={location}>
      <SEO title="Python Page" />
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("pythonHome.libraryYouMissedTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText, stylesPython.info)}
          dangerouslySetInnerHTML={{
            __html: t("pythonHome.libraryYouMissedText"),
          }}
        />

        <div className={styles.actions}>
          <Link to="https://www.utbot.org/demo/?language=Python&source=from%20collections%20import%20deque%0A%0A%0Adef%20generate_people_deque(people_count%3A%20int)%3A%0A%20%20%20%20names%20%3D%20%5B'Alex'%2C%20'Bob'%2C%20'Cate'%2C%20'Daisy'%2C%20'Ed'%5D%0A%20%20%20%20if%20people_count%20%3E%205%3A%0A%20%20%20%20%20%20%20%20people_count%20%3D%205%0A%20%20%20%20return%20deque(sorted(names%5B%3Apeople_count%5D))">
            <Button>{t("pythonHome.tryOnlineText")}</Button>
          </Link>
        </div>
      </Container>

      <Container className={styles.examples}>
        <ExampleCard
          heading={<>{t("pythonHome.fuzzingTitle")}</>}
          text={t("pythonHome.fuzzingText")}
          gifSrc={fuzzingImg}
          gifAlt="Fuzzing example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={<>{t("pythonHome.fitsWorkflowTitle")}</>}
          text={t("pythonHome.fitsWorkflowText")}
          gifSrc={pluginCliImg}
          gifAlt="Plugin and CLI example"
          gifPlacement="left"
        />

        <ExampleCard
          heading={<>{t("pythonHome.noTypeAnnotationsTitle")}</>}
          text={t("pythonHome.noTypeAnnotationsText")}
          gifSrc={typeInferenceImg}
          gifAlt="Type inference example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={<>{t("pythonHome.twoFrameworksSupportedTitle")}</>}
          text={t("pythonHome.twoFrameworksSupportedText")}
          gifSrc={pytestUnittestImg}
          gifAlt="Pytest and Unittest example"
          gifPlacement="left"
        />

        <ExampleCard
          heading={<>{t("pythonHome.failureNotOptionTitle")}</>}
          text={t("pythonHome.failureNotOptionText")}
          gifSrc={assertionsGif}
          gifAlt="Fuzzing example"
          gifPlacement="right"
        />
      </Container>
    </Layout>
  );
};

export default withTrans(PythonPage);
