import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Banner";
import Banner from "@sentrei/ui/components/Banner";

export default function SentreiBanner({
  bannerBottom,
  bannerText,
  bannerTop,
  googleText,
  startText,
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  return (
    <>
      <Banner
        key={i18n.language}
        bannerBottom={bannerBottom}
        bannerText={bannerText}
        bannerTop={bannerTop}
        googleText={googleText}
        startText={startText}
        typicalOne={typicalOne}
        typicalTwo={typicalTwo}
        typicalThree={typicalThree}
      />
    </>
  );
}
