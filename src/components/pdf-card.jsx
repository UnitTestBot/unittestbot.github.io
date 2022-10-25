import * as React from "react";

import Heading from "./heading";
import Text from "./text";

import * as styles from "./pdf-card.module.css";

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
      <embed
        className={styles.pdf}
        src={pdf}
        width="240"
        height="340"
        type="application/pdf"
      ></embed>
    </div>
  );
}
