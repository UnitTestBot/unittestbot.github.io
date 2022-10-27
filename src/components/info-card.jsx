import React from "react";
import cn from "classnames";

import Heading from "./heading";
import Text from "./text";

import * as styles from "./info-card.module.css";

export default function InfoCard({ heading, text }) {
  return (
    <div style={styles.card}>
      <Heading as="h3" className="text-left">
        {heading}
      </Heading>

      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
