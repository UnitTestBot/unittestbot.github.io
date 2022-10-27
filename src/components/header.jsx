import React from "react";
import { useState } from "react";
import cn from "classnames";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import withTrans from "../i18n/withTrans";

import { NavDropdown } from "./nav-dropdown";
import logo from "../images/utbot-logo-white-text.svg";
import * as styles from "./header.module.css";

function Header({ location }) {
  const { t, i18n } = useTranslation();
  const navId = "navbarResponsive";

  const isJavaOrCppPage =
    location &&
    (location.pathname === "/" ||
      location.pathname === "/cpp" ||
      location.pathname === "/cpp/");

  const headerRef = React.useRef(null);
  const [isPinned, setIsPinned] = React.useState(false);
  const [showDownloadFrom, setShowDownloadFrom] = useState(false);

  const showDropdownDownloadFrom = () => {
    setShowDownloadFrom(true);
  };

  const hideDropdownDownloadFrom = () => {
    setShowDownloadFrom(false);
  };

  React.useEffect(() => {
    if (!headerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(entry.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    observer.observe(headerRef.current);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        styles.header,
        (!isJavaOrCppPage || isPinned) && styles.opaque
      )}
    >
      <Container className={styles.container}>
        <Navbar className={styles.navbar} expand="lg" variant="dark">
          <Link className={styles.brand} to="/">
            <Navbar.Brand className={styles.navbarBrand}>
              <img
                alt="UnitTestBot"
                src={logo}
                width="125"
                className="align-top"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls={navId} className={styles.toggle} />

          <Navbar.Collapse id={navId} className={styles.collapse}>
            <Nav
              as="ul"
              className={cn(styles.nav, styles.navTop)}
              style={{
                borderBottomColor: isJavaOrCppPage ? "white" : "transparent",
              }}
            >
              <Nav.Item as="li">
                <CustomLink to="/">{t("header.javaArea")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/cpp">{t("header.cppArea")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/python">{t("header.pythonArea")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/js">{t("header.javaScriptArea")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/go">{t("header.goArea")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/utbot">{t("header.demo")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/research">{t("header.research")}</CustomLink>
              </Nav.Item>
              <Nav.Item as="li">
                <CustomLink to="/about">{t("header.aboutUs")}</CustomLink>
              </Nav.Item>
            </Nav>

            {isJavaOrCppPage && (
              <Nav as="ul" className={cn(styles.nav, styles.navBottom)}>
                {location.pathname == "/" && (
                  <>
                    <Nav.Item as="li">
                      <CustomLink to="/">Overview</CustomLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <CustomLink to="/docs/java/test-with-default-configuration-plugin">
                        {t("header.userGuide")}
                      </CustomLink>
                    </Nav.Item>
                    <NavDropdown
                      isShowDownloadFrom={showDownloadFrom}
                      onShowDropdownDownloadFrom={showDropdownDownloadFrom}
                      onHideDropdownDownloadFrom={hideDropdownDownloadFrom}
                    />
                  </>
                )}
                {(location.pathname === "/cpp" ||
                  location.pathname === "/cpp/") && (
                  <>
                    <Nav.Item as="li">
                      <CustomLink to="/cpp">Overview</CustomLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <CustomLink to="/docs/cpp/">
                        {t("header.userGuide")}
                      </CustomLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <a
                        style={{
                          color: "white",
                        }}
                        href="https://github.com/UnitTestBot/UTBotCpp/releases"
                      >
                        {t("header.download")}
                      </a>
                    </Nav.Item>
                  </>
                )}
              </Nav>
            )}
            {/* <CustomLink to="#">Download from...</CustomLink> */}
            {/* <input
              type="text"
              placeholder={t("header.searchPlaceholder")}
              className="oneLineSearch"
              value={searchValue}
              onKeyDown={e => {
                if (e.key === "Enter" && e.shiftKey === false) {
                  if (searchValue === "") {
                    return;
                  }
                  e.preventDefault();
                  navigate(`/search?query=${encodeURIComponent(searchValue)}`);
                }
              }}
              onChange={e => setSearchValue(e.target.value)}
            /> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

const isActive = (className, to) => ({ isCurrent, location }) => {
  return {
    className: cn(
      className,
      styles.myLink,
      (to == location.pathname || to + "/" == location.pathname) &&
        styles.active
    ),
  };
};

const CustomLink = ({ className, children, to, ...propsCustomLink }) => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Link getProps={isActive(className, to)} to={to} {...propsCustomLink}>
    {children}
  </Link>
);

export default withTrans(Header);
