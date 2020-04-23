import React from "react";
import {shallow} from "enzyme";
import Button from "./index";

describe("Button", () => {
  test("render", () => {
    shallow(<Button />);
  });
});
