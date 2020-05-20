/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Header from "@sentrei/ui/components/Header";
import LogoPicture from "@sentrei/web/components/Picture/LogoPicture";

export default function SentreiHeader(props: any): JSX.Element {
  const {
    faqText,
    featuresText,
    pricingText,
    productText,
    signInText,
    signUpText,
    spy,
    testimonialText,
  } = props;

  return (
    <>
      <Header
        key={i18n.language}
        faqText={faqText}
        featuresText={featuresText}
        pricingText={pricingText}
        productText={productText}
        signInText={signInText}
        signUpText={signUpText}
        testimonialText={testimonialText}
        spy={spy}
        logo={<LogoPicture />}
      />
    </>
  );
}

SentreiHeader.defaultProps = {
  spy: false,
};

SentreiHeader.propTypes = {
  faqText: PropTypes.string.isRequired,
  featuresText: PropTypes.string.isRequired,
  pricingText: PropTypes.string.isRequired,
  productText: PropTypes.string.isRequired,
  signInText: PropTypes.string.isRequired,
  signUpText: PropTypes.string.isRequired,
  spy: PropTypes.bool,
  testimonialText: PropTypes.string.isRequired,
};
