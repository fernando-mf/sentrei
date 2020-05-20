/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Banner from "@sentrei/ui/components/Banner";

export default function SentreiBanner(props: any): JSX.Element {
  const {
    bannerBottom,
    bannerText,
    bannerTop,
    googleText,
    startText,
    typicalOne,
    typicalTwo,
    typicalThree,
  } = props;

  return (
    <>
      <Banner
        key={i18n.language}
        bannerBottom={bannerBottom}
        bannerText={bannerText}
        bannerTop={bannerTop}
        googleText={googleText}
        startText={startText}
        typicalOne={typicalOne}
        typicalTwo={typicalTwo}
        typicalThree={typicalThree}
      />
    </>
  );
}

SentreiBanner.propTypes = {
  bannerBottom: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired,
  bannerTop: PropTypes.string.isRequired,
  googleText: PropTypes.string.isRequired,
  startText: PropTypes.string.isRequired,
  typicalOne: PropTypes.string.isRequired,
  typicalTwo: PropTypes.string.isRequired,
  typicalThree: PropTypes.string.isRequired,
};
