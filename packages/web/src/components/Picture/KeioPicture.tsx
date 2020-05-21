/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const pngPicture = require("../../../public/images/keio.png");

export default function KeioPicture(): JSX.Element {
  return (
    <picture>
      <img src={pngPicture} height="100" width="250" alt="" />
    </picture>
  );
}
