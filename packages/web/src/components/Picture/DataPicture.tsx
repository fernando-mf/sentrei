/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const pngLandingBanner = require("../../../public/images/data.svg");

const Logo = styled.img`
  max-width: 100%;
`;

export default function DataPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={pngLandingBanner} alt="logo" />
    </picture>
  );
}
