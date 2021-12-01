import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({ isMainPage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`}  style={{top: 0, zIndex: "99", width: "100%", position: 'sticky'}}/>
        <main className="siteContent">{children}</main>
        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div style={{
            float: `right`
          }}>UnitTestBot © {new Date().getFullYear()} (Build#SITE_BUILD_NUMBER_PLACEHOLDER) </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMainPage: PropTypes.bool
};

Layout.defaultProps = {
  isMainPage: false
};

export default Layout;
