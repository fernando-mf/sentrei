import {shallow} from "enzyme";
import React from "react";

import ProTip from ".";

describe("ProTip", () => {
  test("render", () => {
    shallow(<ProTip />);
  });
});
