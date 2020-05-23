/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const svgPicture = require("../../../public/images/goal.svg");

export default function GoalPicture(): JSX.Element {
  return (
    <picture>
      <img style={{maxWidth: "100%"}} src={svgPicture} alt="logo" />
    </picture>
  );
}
