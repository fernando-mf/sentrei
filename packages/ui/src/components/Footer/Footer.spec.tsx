import {shallow} from "enzyme";
import React from "react";

import Footer from ".";

describe("Footer", () => {
  test("render", () => {
    shallow(<Footer />);
  });
});
