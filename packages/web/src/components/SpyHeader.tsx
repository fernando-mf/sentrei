/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Header from "@sentrei/ui/components/Header";

const pngLandingBanner = require("../../public/images/banner-landing.png?resize&sizes[]=300&sizes[]=600&sizes[]=900");
const webpLandingBanner = require("../../public/images/banner-landing.png?webp?resize&sizes[]=300&sizes[]=600&sizes[]=900");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SpyHeader(): JSX.Element {
  return (
    <>
      <Header
        spy
        logo={
          <picture>
            <source srcSet={webpLandingBanner.srcSet} type="image/webp" />
            <source srcSet={pngLandingBanner} type="image/png" />
            <img src={pngLandingBanner} alt="logo" />
          </picture>
        }
      />
    </>
  );
}

export default SpyHeader;
