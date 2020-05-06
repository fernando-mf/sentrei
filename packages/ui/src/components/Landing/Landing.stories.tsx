import {storiesOf} from "@storybook/react";
import * as React from "react";

import Landing from ".";

storiesOf("Landing", module)
  .addParameters({
    screenshot: {
      delay: 200,
    },
  })
  .add("Just an Landing story", () => <Landing />);
