/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const svgPicture = require("../../../public/images/data.svg");

export default function DataPicture(): JSX.Element {
  return (
    <picture>
      <img style={{maxWidth: "100%"}} src={svgPicture} alt="logo" />
    </picture>
  );
}
