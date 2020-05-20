/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const pngLandingBanner = require("../../../public/images/banner-landing.png");

const Logo = styled.img`
  max-width: 100%;
`;

function LogoPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={pngLandingBanner} alt="logo" />
    </picture>
  );
}

export default LogoPicture;
