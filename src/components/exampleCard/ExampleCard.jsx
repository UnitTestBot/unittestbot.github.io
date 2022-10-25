import React from "react";
import cn from "classnames";
import * as styles from "./example-card.module.css";

import Gif from "../gif";
import TextContent from "./textContent/TextContent";

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

      <TextContent heading={heading}
        text={text}
        linkTo={linkTo}
        linkText={linkText} 
        containerClassName='text'
        />

      {gifSrc && (
        <Gif src={gifSrc} alt={gifAlt} className={styles.img} />
      )}
    </div>
  );
}
