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
    <p
        dangerouslySetInnerHTML={{
          __html: `${t("contacts.description")} ${t("contacts.email")}`,
        }}
    />
  ];

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github_issues
          discussions_utbot
        }
      }
    }
  `)
  const githubIssues = data.site.siteMetadata.github_issues;
  const discussionsUtbot = data.site.siteMetadata.discussions_utbot;

  const contactsCardFooterElements = [
    <>
      <div>
        {t("contacts.submitProblem")}{" "}
        <Card.Link
            as="a"
            target="_blank"
            href={githubIssues}
        >
          {t("contacts.issues")}
        </Card.Link>
      </div>
      <div>
        {t("contacts.doInDiscussions")}{" "}
        <Card.Link
            as="a"
            target="_blank"
            href={discussionsUtbot}
        >
          {t("contacts.discussions")}
        </Card.Link>
      </div>
    </>
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
