/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Testimonial from "@sentrei/ui/components/Testimonial";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";

export default function SentreiTestimonial(props: any): JSX.Element {
  const {
    sectionTitle,
    authorOne,
    bodyOne,
    occupationOne,
    titleOne,
    authorTwo,
    bodyTwo,
    occupationTwo,
    titleTwo,
    authorThree,
    bodyThree,
    occupationThree,
    titleThree,
  } = props;

  return (
    <>
      <Testimonial
        key={i18n.language}
        sectionTitle={sectionTitle}
        authorOne={authorOne}
        bodyOne={bodyOne}
        imgOne={<FocusPicture />}
        occupationOne={occupationOne}
        titleOne={titleOne}
        authorTwo={authorTwo}
        bodyTwo={bodyTwo}
        imgTwo={<FocusPicture />}
        occupationTwo={occupationTwo}
        titleTwo={titleTwo}
        authorThree={authorThree}
        bodyThree={bodyThree}
        imgThree={<FocusPicture />}
        occupationThree={occupationThree}
        titleThree={titleThree}
      />
    </>
  );
}

SentreiTestimonial.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  authorOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  occupationOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  authorTwo: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  occupationTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  authorThree: PropTypes.string.isRequired,
  bodyThree: PropTypes.string.isRequired,
  occupationThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
};
