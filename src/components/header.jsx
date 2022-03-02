import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";

import { FaGitlab, FaQuestion } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import withTrans from "../i18n/withTrans";
import logo from "../images/utbot-logo-5.svg";
import github from "../images/github.svg";
import "./header.css";

function Header(props) {
  const curLocation = "/";

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

  const [showDocs, setShowDocs] = useState(false);
  const showDropdownDocs = e => {
    setShowDocs(true);
  };
  const hideDropdownDocs = e => {
    setShowDocs(false);
  };

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github_host
        }
      }
    }
  `)
  const githubHost = data.site.siteMetadata.github_host;

  const [showLanguages, setShowLanguages] = useState(false);
  const showDropdownLanguages = e => {
    setShowLanguages(true);
  };
  const hideDropdownLanguages = e => {
    setShowLanguages(false);
  };

  const [searchValue, setSearchValue] = useState("");

  const reloadPage = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <header className="navbar-dark bg-dark" style={props.style}>
      <Container
        style={{ maxWidth: 2000, paddingLeft: "2%", paddingRight: "2%" }}
      >
        <Navbar className="navbar-dark bg-dark" expand="lg" variant="dark">
          <Link to="/">
            <Navbar.Brand>
              <img
                alt="UnitTestBot"
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{" "}
              {props.siteTitle}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="mr-auto">
              <Nav.Item as="li">
                <CustomLink to="/install" className="nav-link">
                  {t("header.install")}
                </CustomLink>
              </Nav.Item>
              <NavDropdown
                title={t("header.docs")}
                as={CustomLink}
                to="/docs"
                show={showDocs}
                onClick={e => {}}
                onMouseEnter={showDropdownDocs}
                onMouseLeave={hideDropdownDocs}
              >
                <NavDropdown.Item onClick={() => navigate("/docs/cpp")}>
                  {t("header.cdocs")}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item as="li">
                <CustomLink to="/contact" className="nav-link">
                  {t("header.contact")}
                </CustomLink>
              </Nav.Item>
            </Nav>

            <Nav activeKey="false">
              <Nav.Item as="li" className="nav-item">
                <Link to="/docs/cpp/faq/" className="nav-link">
                  <FaQuestion /> {t("header.faq")}
                </Link>
              </Nav.Item>

              <Nav.Link
                as="a"
                target="_blank"
                href={githubHost}
              >
                <img
                    alt="UnitTestBot"
                    src={github}
                    width="17"
                    height="17"
                    className="d-inline-block align-center"
                /> {t("header.github")}
              </Nav.Link>
              <NavDropdown
                title={
                  <>
                    {" "}
                    <IoLanguage /> {t("header.lang")}{" "}
                  </>
                }
                show={showLanguages}
                onClick={e => {}}
                onMouseEnter={showDropdownLanguages}
                onMouseLeave={hideDropdownLanguages}
              >
                <NavDropdown.Item
                  onClick={async () => {
                    await i18n.changeLanguage("en");
                    reloadPage();
                  }}
                >
                  {t("header.english")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={async () => {
                    await i18n.changeLanguage("zh-Hant");
                    reloadPage();
                  }}
                >
                  {t("header.chinese")}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <span style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                className="form-control searchForm"
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
              />
              <Button
                type="submit"
                variant="outline-info"
                onClick={() => {
                  navigate(`/search?query=${searchValue}`);
                }}
              >
                {t("header.search")}
              </Button>
            </span>
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
