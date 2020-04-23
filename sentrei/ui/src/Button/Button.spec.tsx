import React from "react";
import {shallow} from "enzyme";
import Button from "./Button";

describe("Button", () => {
  test("render", () => {
    shallow(<Button />);
  });
});
