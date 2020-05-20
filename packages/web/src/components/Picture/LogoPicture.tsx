/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const pngPicture = require("../../../public/images/banner-landing.png");

const Logo = styled.img`
  max-width: 100%;
`;

export default function LogoPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={pngPicture} alt="logo" />
    </picture>
  );
}
