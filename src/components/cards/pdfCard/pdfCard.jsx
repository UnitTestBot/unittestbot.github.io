import * as React from "react";
import cn from "classnames";

import Text from "../../text/text";

import * as styles from "./pdf-card.module.css";

import pdfIcon from "../../../images/pdf-icon.svg.webp";

export default function PdfCard({
  conferenceTitle,
  articleTitle,
  authors,
  pdf,
}) {
  return (
    <div className={styles.pdfCard}>
      {conferenceTitle && (
        <Text
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: conferenceTitle }}
        />
      )}
      {articleTitle && (
        <Text
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: articleTitle }}
        />
      )}
      {authors && (
        <Text
          className={cn(styles.authors, styles.text)}
          dangerouslySetInnerHTML={{ __html: authors }}
        />
      )}
      <a className={styles.link} href={pdf} download={pdf.articleTitle}>
        <img src={pdfIcon} width={60} alt="PDF icon"></img>
      </a>
    </div>
  );
}
