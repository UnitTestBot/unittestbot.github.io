import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";

import * as styles from "./button-group.module.css";

import watchDemoIcon from "../images/watch-demo-icon.png";
import githubIcon from "../images/github-transparent.png";

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
        <Link to={demoVideoLink} className={styles.howWorksLink}>
          <img src={watchDemoIcon} width="32" height="30" alt="Video icon" />
          {t("homeGeneral.watchHowWorksText")}
        </Link>
      )}

      {gitHubLink && (
        <Link to={gitHubLink}>
          <img src={githubIcon} width="50" height="50" alt="GitHub Logo" />
        </Link>
      )}
    </div>
  );
}
