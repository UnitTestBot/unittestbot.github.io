import React from "react";
import cn from "classnames";
import * as styles from "./heading.module.css";

export default function Heading({
  children,
  className,
  as: Tag = "h1",
  ...rest
}) {
  return (
    <Tag {...rest} className={cn(styles.heading, className)}>
      {children}
    </Tag>
  );
}
