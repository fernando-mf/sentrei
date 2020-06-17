import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/types/components/Pricing";
import {analytics} from "@sentrei/common/utils/firebase";
import Pricing from "@sentrei/ui/components/Pricing";

export default function SentreiPricing({
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
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "pricing"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
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
    </div>
  );
}
