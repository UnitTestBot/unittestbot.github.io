import cn from "classnames";

import Heading from "../heading/heading";
import Text from "../text/text";

import * as styles from "./text-content.module.css";

export default function TextContent({
  heading,
  text,
  linkTo,
  linkText,
  containerClassName,
}) {
  return (
    <div className={cn(styles.text, styles[containerClassName])}>
      <Heading as="h3" className="text-left">
        {heading}
      </Heading>

      <Text dangerouslySetInnerHTML={{ __html: text }} />

      {linkTo && linkText && (
        <a href={linkTo} className={styles.link}>
          {linkText}
        </a>
      )}
    </div>
  );
}
