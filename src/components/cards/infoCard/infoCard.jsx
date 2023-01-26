import React from "react";

import Heading from "../../heading/heading";
import Text from "../../text/text";

import * as styles from "./info-card.module.css";

export default function InfoCard({ heading, text }) {
  return (
    <div style={styles.card}>
      <Heading as="h3" className="text-left">
        {heading}
      </Heading>

      <Text
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
