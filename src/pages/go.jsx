import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Heading from "../components/heading/heading";
import Text from "../components/text/text";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import withTrans from "../i18n/withTrans";
import * as styles from "./styles/language-preview.module.css";

const GoPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Go Page" />
      <div className={styles.pageFlexContainer}>
        <Heading>
          {t("goHome.utbotGoTitle")} <br />
          {t("goHome.almostReady")}
        </Heading>
        <Text
          className={"text-center"}
          dangerouslySetInnerHTML={{ __html: t("goHome.utbotGoText") }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(GoPage);
