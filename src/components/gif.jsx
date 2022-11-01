import React from "react";
import * as styles from "./gif.module.css";

export default function Gif({ src, alt, className, width }) {
  return (
    <div className={styles.container}>
      <img width={width} src={src} alt={alt} className={className} />
    </div>
  );
}
