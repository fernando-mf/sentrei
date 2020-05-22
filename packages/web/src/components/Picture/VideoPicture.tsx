/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const svgPicture = require("../../../public/images/video.svg");

export default function VideoPicture(): JSX.Element {
  return (
    <picture>
      <img style={{maxWidth: "100%"}} src={svgPicture} alt="logo" />
    </picture>
  );
}
