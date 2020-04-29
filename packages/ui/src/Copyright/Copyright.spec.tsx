import React from "react";
import {shallow} from "enzyme";
import Copyright from ".";

describe("Copyright", () => {
  test("render", () => {
    shallow(<Copyright />);
  });
});
