/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Feature from "@sentrei/ui/components/Feature";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";
import GoalPicture from "@sentrei/web/components/Picture/GoalPicture";
import TimePicture from "@sentrei/web/components/Picture/TimePicture";

export default function SentreiFeature(props: any): JSX.Element {
  const {
    sectionTitle,
    titleOne,
    subTitleOne,
    titleTwo,
    subTitleTwo,
    titleThree,
    subTitleThree,
  } = props;

  return (
    <>
      <Feature
        key={i18n.language}
        sectionTitle={sectionTitle}
        imgOne={<TimePicture />}
        titleOne={titleOne}
        subTitleOne={subTitleOne}
        imgTwo={<FocusPicture />}
        titleTwo={titleTwo}
        subTitleTwo={subTitleTwo}
        imgThree={<GoalPicture />}
        titleThree={titleThree}
        subTitleThree={subTitleThree}
      />
    </>
  );
}

SentreiFeature.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
