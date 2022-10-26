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

const JsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="JavaScript Page"/>
      <div className={styles.pageFlexContainer}>
        <Heading>
            {t("jsHome.utbotJsTitle")} <br/>
            {t("jsHome.almostReady")}
        </Heading>
        <Text
          className={"text-center"}
          dangerouslySetInnerHTML={{ __html: t("jsHome.utbotJsText") }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(JsPage);
