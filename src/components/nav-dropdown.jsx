import React from "react";
import { NavDropdown as Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import * as styles from "./nav-dropdown.module.css";

export const NavDropdown = ({
  className,
  isShowDownloadFrom,
  onShowDropdownDownloadFrom,
  onHideDropdownDownloadFrom,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.navDropdown}>
      <Dropdown
        title={t("header.download")}
        show={isShowDownloadFrom}
        onClick={() => {}}
        onMouseEnter={onShowDropdownDownloadFrom}
        onMouseLeave={onHideDropdownDownloadFrom}
      >
        <Dropdown.Item as="li">
          <a
            style={{ color: "white" }}
            href="https://github.com/UnitTestBot/UTBotJava/releases"
          >
            {t("header.fromGitHub")}
          </a>
        </Dropdown.Item>
        <Dropdown.Item as="li">
          <a
            style={{ color: "white" }}
            href="https://plugins.jetbrains.com/plugin/19445-unittestbot"
          >
            {t("header.fromJetBrainsMarkerplace")}
          </a>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};
