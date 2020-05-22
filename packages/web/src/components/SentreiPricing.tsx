/* eslint-disable react/forbid-prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Pricing from "@sentrei/ui/components/Pricing";

export default function SentreiPricing(props: any): JSX.Element {
  const {
    sectionTitle,
    priceMonth,
    buttonTextOne,
    description1One,
    description2One,
    description3One,
    priceOne,
    titleOne,
    subTitleOne,
    buttonTextTwo,
    description1Two,
    description2Two,
    description3Two,
    priceTwo,
    titleTwo,
    subTitleTwo,
    buttonTextThree,
    description1Three,
    description2Three,
    description3Three,
    priceThree,
    titleThree,
    subTitleThree,
  } = props;

  return (
    <Pricing
      key={i18n.language}
      sectionTitle={sectionTitle}
      priceMonth={priceMonth}
      buttonTextOne={buttonTextOne}
      description1One={description1One}
      description2One={description2One}
      description3One={description3One}
      priceOne={priceOne}
      titleOne={titleOne}
      subTitleOne={subTitleOne}
      buttonTextTwo={buttonTextTwo}
      description1Two={description1Two}
      description2Two={description2Two}
      description3Two={description3Two}
      priceTwo={priceTwo}
      titleTwo={titleTwo}
      subTitleTwo={subTitleTwo}
      buttonTextThree={buttonTextThree}
      description1Three={description1Three}
      description2Three={description2Three}
      description3Three={description3Three}
      priceThree={priceThree}
      titleThree={titleThree}
      subTitleThree={subTitleThree}
    />
  );
}

Pricing.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  priceMonth: PropTypes.string.isRequired,
  buttonTextOne: PropTypes.string.isRequired,
  description1One: PropTypes.string.isRequired,
  description2One: PropTypes.string.isRequired,
  description3One: PropTypes.string.isRequired,
  priceOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  buttonTextTwo: PropTypes.string.isRequired,
  description1Two: PropTypes.string.isRequired,
  description2Two: PropTypes.string.isRequired,
  description3Two: PropTypes.string.isRequired,
  priceTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  buttonTextThree: PropTypes.string.isRequired,
  description1Three: PropTypes.string.isRequired,
  description2Three: PropTypes.string.isRequired,
  description3Three: PropTypes.string.isRequired,
  priceThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
