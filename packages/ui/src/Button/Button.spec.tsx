import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Button", () => {
  test("render", () => {
    shallow(<Button />);
  });
});
