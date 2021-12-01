import * as React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import welcomeImage from "../images/utbot-logo-5.svg";
import withTrans from "../i18n/withTrans";
import "./styles/index.css";

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const testsGenerationText = t("home.testsGenerationText");
  const testsGenerationBlock = (
    <p dangerouslySetInnerHTML={{ __html: testsGenerationText }} />
  );
  const codeCoverageText = t("home.codeCoverageText");
  const codeCoverageBlock = (
    <p dangerouslySetInnerHTML={{ __html: codeCoverageText }} />
  );
  const errorsDetectionText = t("home.errorsDetectionText");
  const errorsDetectionBlock = (
    <p dangerouslySetInnerHTML={{ __html: errorsDetectionText }} />
  );

  return (
    <Layout isMainPage>
      <SEO title="Home" />
      <header className="mainHeader">
        <Container className="headerContainer">
          <span className="mainHeaderWrapper">
            <h1 className="contentTitle">{t("home.pageTitle")}</h1>
            <p className="slogan">{t("home.slogan")}</p>
            <span className="actions">
              <Link to="/install">
                <Button variant="primary" size="lg">
                  {t("home.install")}
                </Button>{" "}
              </Link>
              <Link to="/utbot/">
                <Button variant="info" size="lg">
                  {t("home.tryOnline")}
                </Button>{" "}
              </Link>
              <Link to="/docs/cpp/">
                <Button variant="outline-info" size="lg">
                  {t("home.more")}
                </Button>{" "}
              </Link>
            </span>
          </span>
          <span className="imageWrapper">
            <img alt="UTBot logo" src={welcomeImage} height="350" />
          </span>
        </Container>
      </header>

      <Container className="whatisContainer">
        <h2>{t("home.whatis")}</h2>
        <div className="columnsWrapper">
          <div className="column">
            <h3 className="columnHeader">{t("home.testsGenerationTitle")}</h3>
            {testsGenerationBlock}
          </div>

          <div className="column">
            <h3 className="columnHeader">{t("home.codeCoverageTitle")}</h3>
            {codeCoverageBlock}
          </div>

          <div className="column">
            <h3 className="columnHeader">{t("home.errorsDetectionTitle")}</h3>
            {errorsDetectionBlock}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default withTrans(MainPage);
