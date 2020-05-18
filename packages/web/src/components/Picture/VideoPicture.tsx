/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import styled from "styled-components";

const pngLandingBanner = require("../../../public/images/video.svg");

const Logo = styled.img`
  max-width: 100%;
`;

function VideoPicture(): JSX.Element {
  return (
    <picture>
      <Logo src={pngLandingBanner} alt="logo" />
    </picture>
  );
}

export default VideoPicture;
