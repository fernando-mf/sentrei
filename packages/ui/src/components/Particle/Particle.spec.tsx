import {shallow} from "enzyme";
import React from "react";

import Particle from ".";

describe("Particle", () => {
  test("render", () => {
    shallow(<Particle />);
  });
});
