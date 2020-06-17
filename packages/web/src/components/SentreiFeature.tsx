import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/types/components/Feature";
import {analytics} from "@sentrei/common/utils/firebase";
import Feature from "@sentrei/ui/components/Feature";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";
import GoalPicture from "@sentrei/web/components/Picture/GoalPicture";
import TimePicture from "@sentrei/web/components/Picture/TimePicture";

type Props = Omit<Original, "imgOne" | "imgTwo" | "imgThree">;

export default function SentreiFeature({
  sectionTitle,
  titleOne,
  subTitleOne,
  titleTwo,
  subTitleTwo,
  titleThree,
  subTitleThree,
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "feature"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
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
    </div>
  );
}
