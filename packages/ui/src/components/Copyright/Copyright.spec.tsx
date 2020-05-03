import {shallow} from "enzyme";
import React from "react";

import Copyright from ".";

describe("Copyright", () => {
  test("render", () => {
    shallow(<Copyright />);
  });
});
