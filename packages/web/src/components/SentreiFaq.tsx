import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Faq";
import {analytics} from "@sentrei/common/utils/firebase";
import Faq from "@sentrei/ui/components/Faq";

export default function SentreiFaq({
  sectionTitle,
  titleOne,
  bodyOne,
  titleTwo,
  bodyTwo,
  titleThree,
  bodyThree,
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "faq"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
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
    </div>
  );
}
