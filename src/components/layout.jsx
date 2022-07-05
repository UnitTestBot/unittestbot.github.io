import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Sidebar from "./sidebar";
import "./sidebar.css";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ isMainPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          build_number
          build_date
        }
      }
    }
  `);

  return (
      <>
        <div className="site">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`}  style={{top: 0, zIndex: "99", width: "100%", position: 'sticky'}}/>
            {
                !docsPage() &&
                    <main className="siteContent">{children}</main>
            }
            {
                docsPage() &&
                    <div className="container-flex">
                        <Sidebar className="sidebar-flex" />
                        <div className="content-flex">
                            <main className="siteContent">{children}</main>
                        </div>
                    </div>
            }
          <footer className="footer mt-auto py-3 bg-dark text-white">
              <div style={{
                  float: `right`
              }}>UnitTestBot © {new Date().getFullYear()} (Build#{data.site.siteMetadata?.build_number},
                  built on {data.site.siteMetadata?.build_date})</div>
          </footer>
        </div>
      </>
  );
};

const docsPage = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    return url.includes("docs/cpp") || url.includes("docs/java")
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMainPage: PropTypes.bool
};

Layout.defaultProps = {
  isMainPage: false
};

export default Layout;
