import React from "react";
import cn from "classnames";
import * as styles from "./button.module.css";

export default function Button({
  variant = "fill",
  children,
  className,
  ...rest
}) {
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button {...rest} className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  );
}
