/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const svgPicture = require("../../../public/images/connect.svg");

const Logo = styled.img`
  max-width: 100%;
`;

export default function ConnectPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={svgPicture} alt="logo" />
    </picture>
  );
}
