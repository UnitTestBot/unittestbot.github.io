import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ThirdCard from "../components/cards/ThirdCard";
import withTrans from "../i18n/withTrans";
import "./styles/python.css";

const PythonPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About Us"/>
      <div className="pageFlexContainer">
        <h2>{t("pythonHome.utbotPythonTitle")}</h2>
        <h2 style={{marginBottom: "2.5rem"}} >{t("pythonHome.almostReady")}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("pythonHome.utbotPythonText")}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(PythonPage);
