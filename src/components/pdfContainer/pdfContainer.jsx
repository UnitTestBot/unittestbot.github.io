import * as React from "react";

import * as styles from "./pdf-container.module.css";

export default function PdfContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
