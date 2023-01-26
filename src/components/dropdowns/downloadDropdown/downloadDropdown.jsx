import React from "react";
import { NavDropdown as Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import * as styles from "./download-dropdown.module.css";

export const DownloadDropdown = ({
  className,
  isShowDownloadFrom,
  onShowDropdownDownloadFrom,
  onHideDropdownDownloadFrom,
  downloadGitHubLink,
  downloadJetBrainsMarketplaceLink,
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
        {downloadGitHubLink && (
          <Dropdown.Item as="li">
            <a style={{ color: "white" }} href={downloadGitHubLink}>
              {t("header.fromGitHub")}
            </a>
          </Dropdown.Item>
        )}
        {downloadJetBrainsMarketplaceLink && (
          <Dropdown.Item as="li">
            <a
              style={{ color: "white" }}
              href={downloadJetBrainsMarketplaceLink}
            >
              {t("header.fromJetBrainsMarkerplace")}
            </a>
          </Dropdown.Item>
        )}
      </Dropdown>
    </div>
  );
};
