import * as React from "react";

import { Card, Button, Alert } from "react-bootstrap";
import {graphql, Link, useStaticQuery} from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryCard from "../components/cards/PrimaryCard";
import withTrans from "../i18n/withTrans";
import "./styles/page.css";
import "./styles/install.css";

const InstallPage = () => {
  const { t, i18n } = useTranslation();

  const mainCardBodyElements = [];
  mainCardBodyElements.push(
    <p dangerouslySetInnerHTML={{ __html: t("install.mainPart1") }} />
  );
  mainCardBodyElements.push(
    <p dangerouslySetInnerHTML={{ __html: t("install.mainPart2") }} />
  );
  mainCardBodyElements.push(
    <Alert
        variant="warning"
        dangerouslySetInnerHTML={{ __html: t("install.alert") }}
    />,
  );

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          utbot_cpp_releases_info
          utbot_java_releases_info
          utbot_cpp_releases_link
          utbot_java_releases_link
      }
    }
   }
  `);

  // TODO: When the first release version (non pre-release) will be available change request url
  // to `https://github.com/UnitTestBot/UTBotCpp/releases/latest`
  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Install" />

        <PrimaryCard
          title="Install UnitTestBot"
          mainBody={mainCardBodyElements}
        />
        <div className="innerFlexContainer">
          <Card className="releaseCard" bg="info" text="white">
            <Card.Header as="h5">{t("install.utbotCpp")}</Card.Header>
            <Card.Body>
              <Card.Subtitle>{t("install.latestStable")}{": 2022.7.0"}</Card.Subtitle>
              <Card.Text />
              <div className="buttonsContainerCpp">
                <Button
                  variant="primary"
                  className="getButton"
                  href={data.site.siteMetadata.utbot_cpp_releases_link}
                  as="a"
                  target="_blank"
                >
                  {t("install.get")}
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="releaseCard" bg="info" text="white">
            <Card.Header as="h5">{t("install.utbotJava")}</Card.Header>
            <Card.Body>
              <Card.Subtitle>{t("install.latestStable")}{": 2022.7-beta"}</Card.Subtitle>
              <Card.Text />
              <div className="buttonsContainerCpp">
                <Button
                    variant="primary"
                    className="getButton"
                    href={data.site.siteMetadata.utbot_java_releases_link}
                    as="a"
                    target="_blank"
                >
                  {t("install.get")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default withTrans(InstallPage);
