import * as React from "react";

import Heading from "./heading";
import Text from "./text";

import * as styles from "./pdf-card.module.css";

import pdfIcon from "../images/pdf-icon.svg.webp";

export default function PdfCard({
  conferenceTitle,
  articleTitle,
  authors,
  pdf,
}) {
  return (
    <div className={styles.pdfCard}>
      {conferenceTitle && (
        <Text dangerouslySetInnerHTML={{ __html: conferenceTitle }} />
      )}
      {articleTitle && (
        <Text dangerouslySetInnerHTML={{ __html: articleTitle }} />
      )}
      {authors && <Text dangerouslySetInnerHTML={{ __html: authors }} />}
      <a className={styles.link} href={pdf} download={pdf.articleTitle}>
        <img src={pdfIcon} width={60} alt="PDF icon"></img>
      </a>
    </div>
  );
}
