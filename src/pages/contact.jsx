import * as React from "react";
import { Card } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ThirdCard from "../components/cards/ThirdCard";
import withTrans from "../i18n/withTrans";
import "./styles/page.css";
import "./styles/contact.css";

const ContactsPage = () => {
  const { t, i18n } = useTranslation();
  const contactsCardBodyElements = [
    <p>{t("contacts.description")}</p>,
    <p
      dangerouslySetInnerHTML={{
        __html: `${t("contacts.ivanov")} <br/> ${t("contacts.stromov")} <br/> ${t("contacts.qianxiang")}`,
      }}
    />,
  ];

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github_issues
        }
      }
    }
  `)
  const githubIssues = data.site.siteMetadata.github_issues;

  const contactsCardFooterElements = [
    <>
      {t("contacts.submitProblem")}{" "}
      <Card.Link
        as="a"
        target="_blank"
        href={githubIssues}
      >
        {t("contacts.issues")}
      </Card.Link>
    </>,
  ];

  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Contacts" />
        <ThirdCard
          className="contactsCard"
          title="Contact Us"
          mainBody={contactsCardBodyElements}
          footerBody={contactsCardFooterElements}
        />
      </div>
    </Layout>
  );
};

export default withTrans(ContactsPage);
