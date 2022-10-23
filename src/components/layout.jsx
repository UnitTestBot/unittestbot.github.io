import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";

import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const isJavaOrCppPage =
    location && (location.pathname === "/" || location.pathname === "/cpp" || location.pathname === "/cpp/");

  return (
    <div className={cn(styles.site, isJavaOrCppPage && styles.gradient)}>
      <Header
        location={location}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main className={cn(styles.main)}>{children}</main>
      <footer className={cn(styles.footer, "mt-auto text-white")}>
        <div style={{ float: `right` }}>UnitTestBot © 2022</div>
      </footer>
    </div>
  );
};

export default Layout;
