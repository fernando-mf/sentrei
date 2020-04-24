import React from "react";
import {shallow} from "enzyme";
import Index from ".";

describe("Index", () => {
  test("render", () => {
    shallow(<Index />);
  });
});
