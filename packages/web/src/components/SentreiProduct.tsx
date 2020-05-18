/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Product from "@sentrei/ui/components/Product";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

function SentreiProduct(): JSX.Element {
  return (
    <>
      <Product img={<VideoPicture />} />
    </>
  );
}

export default SentreiProduct;
