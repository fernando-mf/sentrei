/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Faq from "@sentrei/ui/components/Faq";

export default function SentreiFaq(props: any): JSX.Element {
  const {
    sectionTitle,
    titleOne,
    bodyOne,
    titleTwo,
    bodyTwo,
    titleThree,
    bodyThree,
  } = props;

  return (
    <Faq
      key={i18n.language}
      sectionTitle={sectionTitle}
      titleOne={titleOne}
      bodyOne={bodyOne}
      titleTwo={titleTwo}
      bodyTwo={bodyTwo}
      titleThree={titleThree}
      bodyThree={bodyThree}
    />
  );
}

SentreiFaq.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  bodyThree: PropTypes.string.isRequired,
};
