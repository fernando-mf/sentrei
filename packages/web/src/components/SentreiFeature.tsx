import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Feature from "@sentrei/ui/components/Feature";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";
import GoalPicture from "@sentrei/web/components/Picture/GoalPicture";
import TimePicture from "@sentrei/web/components/Picture/TimePicture";

export default function SentreiFeature(): JSX.Element {
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
        imgOne={<TimePicture />}
        imgTwo={<FocusPicture />}
        imgThree={<GoalPicture />}
      />
    </div>
  );
}
