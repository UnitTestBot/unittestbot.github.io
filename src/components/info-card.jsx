import React from "react";
import cn from "classnames";

import Heading from "./heading";
import Text from "./text";

export default function InfoCard({ heading, text }) {
  return (
    <div>
      <Heading as="h3" className="text-left">
        {heading}
      </Heading>

      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
