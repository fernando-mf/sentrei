import {storiesOf} from "@storybook/react";
import * as React from "react";

import NavBar from ".";

storiesOf("NavBar", module)
  .addParameters({
    screenshot: {
      delay: 200,
    },
  })
  .add("Just an NavBar story", () => <NavBar />);
