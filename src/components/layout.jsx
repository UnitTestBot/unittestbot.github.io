import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import withTrans from "../i18n/withTrans";
import { useState } from "react";

import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./layout.module.css";

import youtubeIcon from "../images/youtube-icon.png";
import githubIcon from "../images/github-transparent.png";

const Layout = ({ children, location }) => {
  const { t, i18n } = useTranslation();

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
    location &&
    (location.pathname === "/" ||
      location.pathname === "/cpp" ||
      location.pathname === "/cpp/");

  return (
    <div className={cn(styles.site, isJavaOrCppPage && styles.gradient)}>
      <Header location={location} />
      <main className={cn(styles.main)}>{children}</main>
      <footer className={cn(styles.footer, "mt-auto text-white")}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>{t("footer.utbotCopyright")}</div>
          <div className={styles.buttons}>
            <a href="https://www.youtube.com/channel/UCnvEzTrYfaLswAUDrPL-3uQ">
              <img
                className={styles.githubIcon}
                src={youtubeIcon}
                alt="YouTube icon"
              />
            </a>
            <a href="https://github.com/UnitTestBot">
              <img
                className={styles.youtubeIcon}
                src={githubIcon}
                alt="GitHub icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
