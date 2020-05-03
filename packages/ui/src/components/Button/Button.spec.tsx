import {shallow} from "enzyme";
import React from "react";

import Button from ".";

describe("Button", () => {
  test("render", () => {
    shallow(<Button />);
  });
});
