import * as React from "react";

import { Card } from "react-bootstrap";
import { Link } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import withTrans from "../../i18n/withTrans";
import "../styles/page.css";

const DocsJavaPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Docs" />

        <Card className="utbotVersionCard" bg="light">
          <Card.Body>
            <Card.Title as="h3">{t("docs.javadocsMainTitle")}</Card.Title>
            <Card.Text>
              <p>{t("System requirements: JDK 8 (higher JDK is not yet supported), IntellijIDEA 2020.2 or newer")}</p>
              <p/>
              <p>{t("Installation:")}</p>
              <p>In IntelliJ IDEA click File -> Settings... ->  Plugins -> ⚙️ -> Install Plugin from disk... (choose utbot-intellij-&lt;version&gt;.zip)</p>
              <p>Add dependencies into module that you want to test:</p>
              <ol>
                <li>JUnit 5+ (tested on 5.7.0)</li>
                <li>Mockito 3.5+ (tested on 3.5.13)</li>
              </ol>
              <p><b>⚠ Please note:</b> 'test' folder must exist in the module you want to test</p>
              <p/>
              <p>To run UTBot: navigate on any java class and click "Generate" (Alt-Ins) -> "Create tests with UtBot..."</p>
            </Card.Text>
            <Card.Link as={Link} to="/">
              {t("docs.goHome")}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
};

export default withTrans(DocsJavaPage);
