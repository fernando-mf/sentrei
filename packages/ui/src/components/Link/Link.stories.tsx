import {storiesOf} from "@storybook/react";
import * as React from "react";

import Link from ".";

storiesOf("Link", module)
  .addParameters({
    screenshot: {
      delay: 200,
    },
  })
  .add("Just an Link story", () => <Link href="/" />);
