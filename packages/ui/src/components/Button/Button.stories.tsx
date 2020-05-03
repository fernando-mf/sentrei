import * as React from "react";
import {storiesOf} from "@storybook/react";
import Button from ".";

storiesOf("Button", module)
  .addParameters({
    screenshot: {
      delay: 200,
    },
  })
  .add("Just an Button story", () => <Button />);