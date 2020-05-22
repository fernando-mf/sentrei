/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const svgPicture = require("../../../public/images/connect.svg");

export default function ConnectPicture(): JSX.Element {
  return (
    <picture>
      <img style={{maxWidth: "100%"}} src={svgPicture} alt="logo" />
    </picture>
  );
}
