import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";

import Button from "../button/button";

import * as styles from "./button-group.module.css";

import watchDemoIcon from "../../images/watch-demo-icon.png";
import githubIcon from "../../images/github.svg";

export default function ButtonGroup({
  tryOnlineLink,
  demoVideoLink,
  gitHubLink,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.actions}>
      <Link to={tryOnlineLink}>
        <Button>{t("homeGeneral.tryOnlineText")}</Button>
      </Link>

      {demoVideoLink && (
        <a
          href={demoVideoLink}
          className={styles.howWorksLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={watchDemoIcon} width="32" height="30" alt="Video icon" />
          {t("homeGeneral.watchHowWorksText")}
        </a>
      )}

      {gitHubLink && (
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} width="45" alt="GitHub Logo" />
        </a>
      )}
    </div>
  );
}
