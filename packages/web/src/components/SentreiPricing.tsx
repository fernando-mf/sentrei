/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Pricing from "@sentrei/ui/components/Pricing";

export default function SentreiPricing(props: any): JSX.Element {
  const {
    buttonTextOne,
    buttonVariantOne,
    descriptionOne,
    priceOne,
    titleOne,
    subTitleOne,
    buttonTextTwo,
    buttonVariantTwo,
    descriptionTwo,
    priceTwo,
    titleTwo,
    subTitleTwo,
    buttonTextThree,
    buttonVariantThree,
    descriptionThree,
    priceThree,
    titleThree,
    subTitleThree,
  } = props;

  return (
    <Pricing
      key={i18n.language}
      buttonTextOne={buttonTextOne}
      buttonVariantOne={buttonVariantOne}
      descriptionOne={descriptionOne}
      priceOne={priceOne}
      titleOne={titleOne}
      subTitleOne={subTitleOne}
      buttonTextTwo={buttonTextTwo}
      buttonVariantTwo={buttonVariantTwo}
      descriptionTwo={descriptionTwo}
      priceTwo={priceTwo}
      titleTwo={titleTwo}
      subTitleTwo={subTitleTwo}
      buttonTextThree={buttonTextThree}
      buttonVariantThree={buttonVariantThree}
      descriptionThree={descriptionThree}
      priceThree={priceThree}
      titleThree={titleThree}
      subTitleThree={subTitleThree}
    />
  );
}

Pricing.propTypes = {
  buttonTextOne: PropTypes.string.isRequired,
  buttonVariantOne: PropTypes.string.isRequired,
  descriptionOne: PropTypes.string.isRequired,
  priceOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  buttonTextTwo: PropTypes.string.isRequired,
  buttonVariantTwo: PropTypes.string.isRequired,
  descriptionTwo: PropTypes.string.isRequired,
  priceTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  buttonTextThree: PropTypes.string.isRequired,
  buttonVariantThree: PropTypes.string.isRequired,
  descriptionThree: PropTypes.string.isRequired,
  priceThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
