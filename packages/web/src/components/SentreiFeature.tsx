import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Feature";
import Feature from "@sentrei/ui/components/Feature";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";
import GoalPicture from "@sentrei/web/components/Picture/GoalPicture";
import TimePicture from "@sentrei/web/components/Picture/TimePicture";

export default function SentreiFeature({
  sectionTitle,
  titleOne,
  subTitleOne,
  titleTwo,
  subTitleTwo,
  titleThree,
  subTitleThree,
}: Props): JSX.Element {
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
