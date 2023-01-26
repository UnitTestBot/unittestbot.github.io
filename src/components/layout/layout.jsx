import * as React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import Header from "./header/header";
import Footer from "./footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, location }) => {
  const { t, i18n } = useTranslation();

  const isDemoPage = location && location.pathname.startsWith("/demo");

  return (
    <div className={cn(styles.site, isDemoPage && styles.demoBg)}>
      <Header location={location} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
