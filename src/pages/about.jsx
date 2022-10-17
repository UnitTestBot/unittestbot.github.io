import * as React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";

import Text from "../components/text";

import * as styles from "./styles/about.module.css";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About Us"/>
      <div className={styles.pageFlexContainer}>
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.whoWeAreText") }}        
        />
        <ul className={styles.universities}>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.spbu") }}/>
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.hse") }}/>
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.itmo") }}/>
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.spbpu") }}/>
          </li>
        </ul>
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.whatWeDevelopText") }}        
        />
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.visitGitHubText") }}        
        />
      </div>
    </Layout>
  );
};

export default withTrans(AboutPage);
