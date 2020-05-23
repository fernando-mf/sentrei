/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const pngPicture = require("../../../public/images/ucl.png");

export default function UclPicture(): JSX.Element {
  return (
    <picture>
      <img src={pngPicture} height="100" width="250" alt="" />
    </picture>
  );
}
