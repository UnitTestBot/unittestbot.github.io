import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ThirdCard from "../components/cards/ThirdCard";
import withTrans from "../i18n/withTrans";
import "./styles/research.css";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Research"/>
      <div className="pageFlexContainer">
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("aboutUs.whoWeAreText")}`,
          }}
        />
        <ul>
          <li>{t("aboutUs.spbu")}</li>
          <li>{t("aboutUs.hse")}</li>
          <li>{t("aboutUs.itmo")}</li>
        </ul>
      </div>
    </Layout>
  );
};

export default withTrans(AboutPage);
