import React from "react";
import cn from "classnames";
import * as styles from "./example-card.module.css";

import Gif from "./gif";
import Button from "./button";
import { Link } from "gatsby";
import Text from "./text";
import Heading from "./heading";

export default function ExampleCard({
  heading,
  text,
  linkTo,
  linkText,
  gifSrc,
  gifAlt,
  gifPlacement = "right",
}) {
  return (
    <div className={cn(styles.card, styles[gifPlacement])}>
      <div className={styles.text}>
        <Heading as="h3" className="text-left">
          {heading}
        </Heading>

        <Text dangerouslySetInnerHTML={{ __html: text }} />

        {linkTo && linkText && (
          <Link to={linkTo}>
            <Button className={styles.button}>{linkText}</Button>
          </Link>
        )}
      </div>

      {gifSrc && (
        <Gif src={gifSrc} alt={gifAlt} className={styles.img} width={550} />
      )}
    </div>
  );
}
