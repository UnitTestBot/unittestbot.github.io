import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "./styles/go.css";

const GoPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About Us"/>
      <div className="pageFlexContainer">
        <h2>{t("goHome.utbotGoTitle")}</h2>
        <h2 style={{marginBottom: "2.5rem"}}>{t("goHome.almostReady")}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("goHome.utbotGoText")}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(GoPage);
