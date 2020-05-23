/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const pngPicture = require("../../../public/images/banner-landing.png");

export default function LogoPicture(): JSX.Element {
  return (
    <picture>
      <img style={{maxWidth: "100%"}} src={pngPicture} alt="logo" />
    </picture>
  );
}
