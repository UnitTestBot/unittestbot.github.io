import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import Heading from "../components/heading"
import Text from "../components/text"

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import * as styles from "./styles/language-preview.module.css";

const PythonPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Python Page"/>
      <div className={styles.pageFlexContainer}>
        <Heading>
          {t("pythonHome.utbotPythonTitle")} <br/>
          {t("pythonHome.almostReady")}
        </Heading>
        <Text
          className={"text-center"}
          dangerouslySetInnerHTML={{ __html: t("pythonHome.utbotPythonText") }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(PythonPage);
