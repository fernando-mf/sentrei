import {storiesOf} from "@storybook/react";
import * as React from "react";

import Header from ".";

storiesOf("Header", module)
  .addParameters({
    screenshot: {
      delay: 200,
    },
  })
  .add("Just an Header story", () => <Header logo={<></>} />);
