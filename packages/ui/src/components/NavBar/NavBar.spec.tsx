import {shallow} from "enzyme";
import React from "react";

import NavBar from ".";

describe("NavBar", () => {
  test("render", () => {
    shallow(<NavBar />);
  });
});
