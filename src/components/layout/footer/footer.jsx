import React from "react";
import cn from "classnames";
import * as styles from "./footer.module.css";

import youtubeIcon from "../../../images/youtube-icon.svg";
import githubIcon from "../../../images/github.svg";
import { useTranslation } from "react-i18next";
import withTrans from "../../../i18n/withTrans";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className={cn(styles.footer, "mt-auto text-white")}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>{t("footer.utbotCopyright")}</div>
        <div className={styles.buttons}>
          <a href="https://www.youtube.com/channel/UCnvEzTrYfaLswAUDrPL-3uQ">
            <img
              className={styles.youtubeIcon}
              src={youtubeIcon}
              alt="YouTube icon"
            />
          </a>
          <a href="https://github.com/UnitTestBot">
            <img
              className={styles.githubIcon}
              src={githubIcon}
              alt="GitHub icon"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default withTrans(Footer);