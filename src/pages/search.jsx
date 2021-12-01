import React from "react";
import { Card } from "react-bootstrap";
import { navigate, StaticQuery, graphql } from "gatsby";
import { Index } from "elasticlunr";

import { useTranslation } from "react-i18next";
import SearchResultsList from "../components/search/SearchResultsList";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "./styles/page.css";
import "./styles/search.css";

const SearchInner = props => {
  const { t, i18n } = useTranslation();

  let searchQuery = "";

  if (typeof window !== "undefined") {
    searchQuery = new URL(window.location.href).searchParams.get("query") || "";
  }

  function getSearchResults(query) {
    const index = Index.load(props.searchIndex);
    return index
      .search(query, { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref));
  }

  const results = getSearchResults(searchQuery);

  return (
    <Layout>
      <div className="pageFlexContainer">
        <SEO title="Search" />

        <Card className="searchCard" bg="light">
          <Card.Header as="h3">{t("search.title")}</Card.Header>
          <Card.Body>
            <span>
              <input
                type="search"
                placeholder={t("search.placeholder")}
                className="form-control mr-sm-2"
                value={searchQuery}
                onKeyDown={e => {
                  if (e.key === "Enter" && e.shiftKey === false) {
                    e.preventDefault();
                    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
                  }
                }}
                onChange={e => {
                  const navigateTo = `/search?query=${encodeURIComponent(
                    e.target.value
                  )}`;
                  navigate(navigateTo);
                }}
              />
            </span>
          </Card.Body>
        </Card>
        <SearchResultsList objects={results} />
      </div>
    </Layout>
  );
};

const SearchPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => <SearchInner searchIndex={data.siteSearchIndex.index} />}
    />
  );
};

export default withTrans(SearchPage);
