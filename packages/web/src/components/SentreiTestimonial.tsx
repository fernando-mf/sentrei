/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Testimonial from "@sentrei/ui/components/Testimonial";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";

export default function SentreiTestimonial(props: any): JSX.Element {
  const {authorOne, bodyOne, occupationOne, titleOne} = props;

  return (
    <>
      <Testimonial
        key={i18n.language}
        authorOne={authorOne}
        bodyOne={bodyOne}
        imgOne={<FocusPicture />}
        occupationOne={occupationOne}
        titleOne={titleOne}
      />
    </>
  );
}

SentreiTestimonial.propTypes = {
  authorOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  occupationOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
};
