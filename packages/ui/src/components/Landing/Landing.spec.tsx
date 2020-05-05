import {shallow} from "enzyme";
import React from "react";

import Landing from ".";

describe("Landing", () => {
  test("render", () => {
    shallow(<Landing />);
  });
});
