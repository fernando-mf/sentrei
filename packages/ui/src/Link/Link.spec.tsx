import React from "react";
import {shallow} from "enzyme";
import Link from ".";

describe("Link", () => {
  test("render", () => {
    shallow(<Link href="/" />);
  });
});
