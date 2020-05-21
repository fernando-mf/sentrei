/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const svgPicture = require("../../../public/images/data.svg");

const Logo = styled.img`
  max-width: 100%;
`;

export default function DataPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={svgPicture} alt="logo" />
    </picture>
  );
}
