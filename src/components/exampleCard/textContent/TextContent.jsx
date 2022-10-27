import { Link } from "gatsby";
import Button from "../../button";
import Heading from "../../heading";
import Text from "../../text";

import * as styles from "./style.module.css";

export default function TextContent({
  heading,
  text,
  linkTo,
  linkText,
  containerClassName,
}) {
  return (
    <div className={styles[containerClassName]}>
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
