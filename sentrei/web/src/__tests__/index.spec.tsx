import React from "react";
import {shallow} from "enzyme";
import Index from "../pages";

describe("Index", () => {
  test("render", () => {
    shallow(<Index />);
  });
});
