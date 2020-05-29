import {shallow} from "enzyme";
import React from "react";

import Header from ".";

describe("Header", () => {
  test("render", () => {
    shallow(
      <Header
        faqText=""
        featuresText=""
        logo={<></>}
        pricingText=""
        productText=""
        loginText=""
        signupText=""
        spy
        testimonialText=""
      />,
    );
  });
});
