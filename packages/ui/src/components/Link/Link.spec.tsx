import {shallow} from "enzyme";
import React from "react";

import Link from ".";

describe("Link", () => {
  test("render", () => {
    shallow(<Link href="/" />);
  });
});
