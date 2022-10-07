import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "./styles/js.css";

const JsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About Us"/>
      <div className="pageFlexContainer">
        <h2>{t("jsHome.utbotJsTitle")}</h2>
        <h2 style={{marginBottom: "2.5rem"}}>{t("jsHome.almostReady")}</h2>
        <p
          style={{textAlign: "center"}}
          dangerouslySetInnerHTML={{
            __html: `${t("jsHome.utbotJsText")}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(JsPage);
