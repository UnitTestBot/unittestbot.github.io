import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";

import { useTranslation } from "react-i18next";
import withTrans from "../i18n/withTrans";
import logo from "../images/utbot-logo.png";
import "./header.css";

function Header(props) {

  const { t, i18n } = useTranslation();

  const isActive = className => ({ isPartiallyCurrent }) => ({
    className: className + (isPartiallyCurrent ? " active" : ""),
  });

  const CustomLink = ({ className, children, ...propsCustomLink }) => (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Link getProps={isActive(className)} {...propsCustomLink}>
      {children}
    </Link>
  );

  return (
    <header className="header-position" style={props.style}>
      <Container id="container">
        <Navbar className="headerNavBar" style={{padding: "1rem"}} expand="lg" variant="dark">
          <Link style={{position: "absolute"}} to="/">
            <Navbar.Brand>
              <img
                alt="UnitTestBot"
                src={logo}
                width="115"
                height="50"
                className="align-top"
              />{" "}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarResponsive" style={{ marginLeft: 'auto' }} />
          <Navbar.Collapse id="navbarResponsive" style={{ justifyContent: 'center' }}>
              <Nav as="ul" style={{justifyContent: "center"}}>
                <Nav.Item as="li">
                  <CustomLink to="/" className="nav-link">
                    {t("header.javaArea")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/cpp" className="nav-link">
                    {t("header.cppArea")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/python" className="nav-link">
                    {t("header.pythonArea")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/js" className="nav-link">
                    {t("header.javaScriptArea")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/go" className="nav-link">
                    {t("header.goArea")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/utbot" className="nav-link">
                    {t("header.demo")}
                  </CustomLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <CustomLink to="/about" className="nav-link">
                    {t("header.aboutUs")}
                  </CustomLink>
                </Nav.Item>
              </Nav>
            {/*<input
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
            />*/}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  style: PropTypes.object,
};

Header.defaultProps = {
  siteTitle: `UnitTestBot`,
  style: {}
};

export default withTrans(Header);
