import React from "react";
import cn from "classnames";
import * as styles from "./text.module.css";

export default function Text({ size = "md", children, className, ...rest }) {
  return (
    <p {...rest} className={cn(styles.text, styles[size], className)}>
      {children}
    </p>
  );
}
