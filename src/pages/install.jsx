import * as React from "react";

import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryCard from "../components/cards/PrimaryCard";
import ThirdCard from "../components/cards/ThirdCard";
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

  const cppLanguageCardMainElements = [
    <Alert
      variant="warning"
      dangerouslySetInnerHTML={{ __html: t("install.cppAlert") }}
    />,
    <p>{t("install.cppPart1")}</p>,
    <p>{t("install.cppPart2")}</p>,
    <p>{t("install.cppPart3")}</p>,
  ];
  const cppLanguageCardFooterElements = [
    <Card.Link
      as={Link}
      to="/docs/cpp/installation/installing-the-utbot-server"
      href="/docs/cpp/installation/installing-the-utbot-server"
    >
      {t("install.cppGuide")}
    </Card.Link>,
  ];

  const javaLanguageCardMainElements = [
    <Alert
      variant="info"
      dangerouslySetInnerHTML={{ __html: t("install.javaAlert") }}
    />,
    <p>{t("install.javaPart1")}</p>,
  ];
  const javaLanguageCardFooterElements = [
    <Card.Link
        as={Link}
        to="/docs/java/"
        href="/docs/java/"
    >
      {t("install.cppGuide")}
    </Card.Link>,
  ];

  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Install" />

        <PrimaryCard
          title="Install UnitTestBot"
          mainBody={mainCardBodyElements}
        />

        <ThirdCard
          title={t("install.cpp")}
          mainBody={cppLanguageCardMainElements}
          footerBody={cppLanguageCardFooterElements}
        />

        <div className="innerFlexContainer">
          <Card className="releaseCard" bg="info" text="white">
            <Card.Header as="h5">{t("install.release")}</Card.Header>
            <Card.Body>
              <Card.Subtitle>{t("install.cppReleaseVersion")}</Card.Subtitle>
              <Card.Text />
              <div className="buttonsContainerCpp">
                <Button
                  variant="primary"
                  className="getButton"
                  href="INSTALLER_RELEASE_VERSION_LINK"
                  as="a"
                  target="_blank"
                >
                  {t("install.getserver")}
                </Button>
                <Button
                  variant="primary"
                  className="getButton"
                  href="VSIX_RELEASE_VERSION_LINK"
                  as="a"
                  target="_blank"
                >
                  {t("install.getvsix")}
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="nightlyCard" bg="dark" text="white">
            <Card.Header as="h5">{t("install.nightly")}</Card.Header>
            <Card.Body>
              <Card.Subtitle>{t("install.cppSnapshotVersion")}</Card.Subtitle>
              <Card.Text />
              <div className="buttonsContainerCpp">
                <Button
                  variant="primary"
                  className="getButton"
                  href="INSTALLER_SNAPSHOT_VERSION_LINK"
                  as="a"
                  target="_blank"
                >
                  {t("install.getserver")}
                </Button>
                <Button
                  variant="primary"
                  className="getButton"
                  href="VSIX_SNAPSHOT_VERSION_LINK"
                  as="a"
                  target="_blank"
                >
                  {t("install.getvsix")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <ThirdCard
          title="UnitTestBot Java"
          mainBody={javaLanguageCardMainElements}
          footerBody={javaLanguageCardFooterElements}
        />
        <Card className="nightlyCard" bg="dark" text="white">
          <Card.Header as="h5">{t("install.nightly")}</Card.Header>
          <Card.Body>
            <Card.Subtitle>{t("install.javaSnapshotVersion")}</Card.Subtitle>
            <Card.Text />
            <div className="buttonsContainerCpp">
              <Button
                  variant="primary"
                  className="getButton"
                  href="IDEA_PLUGIN_SNAPSHOT_LINK"
                  as="a"
                  target="_blank">
                {t("install.getIdeaPlugin")}
              </Button>
            </div>
          </Card.Body>
        </Card>

      </div>
    </Layout>
  );
};

export default withTrans(InstallPage);
