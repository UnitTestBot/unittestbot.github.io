import * as React from "react";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "./styles/about.css";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About Us"/>
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
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("aboutUs.whatWeDevelopText")}`,
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("aboutUs.visitGitHubText")}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(AboutPage);
