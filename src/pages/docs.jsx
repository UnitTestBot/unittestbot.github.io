import * as React from "react";

import { Card } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import SEO from "../components/seo";
import Layout from "../components/layout";
import withTrans from "../i18n/withTrans";
import "./styles/page.css";
import "./styles/docs.css";

const DocsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Docs" />

        <Card className="utbotVersionCard" bg="light">
          <Card.Body>
            <Card.Title as="h3">{t("docs.cdocsTitle")}</Card.Title>
            <Card.Text>
              <p>{t("docs.cdocsText")}</p>
            </Card.Text>
            <Card.Link as={Link} href="/docs/cpp/">
              {t("docs.cdocsLink")}
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="utbotVersionCard" bg="light">
          <Card.Body>
            <Card.Title as="h3">{t("docs.javadocsTitle")}</Card.Title>
            <Card.Text>
              <p>{t("docs.javadocsText")}</p>
            </Card.Text>
            <Card.Link as={Link} href="/docs/java/">
              {t("docs.javadocsLink")}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default withTrans(DocsPage);
