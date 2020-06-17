import React from "react";

import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/types/components/Banner";
import {analytics} from "@sentrei/common/utils/firebase";
import Banner from "@sentrei/ui/components/Banner";

export default function SentreiBanner({
  bannerBottom,
  bannerBottomRough,
  bannerTextOne,
  bannerTextTwo,
  bannerTextThree,
  bannerTextRough,
  bannerTop,
  googleText,
  startText,
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "banner"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <Banner
        key={i18n.language}
        bannerBottom={bannerBottom}
        bannerBottomRough={bannerBottomRough}
        bannerTextOne={bannerTextOne}
        bannerTextTwo={bannerTextTwo}
        bannerTextThree={bannerTextThree}
        bannerTextRough={bannerTextRough}
        bannerTop={bannerTop}
        googleText={googleText}
        startText={startText}
        typicalOne={typicalOne}
        typicalTwo={typicalTwo}
        typicalThree={typicalThree}
      />
    </div>
  );
}
