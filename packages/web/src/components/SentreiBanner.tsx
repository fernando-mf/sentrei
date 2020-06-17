import React from "react";

import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Banner from "@sentrei/ui/components/Banner";

export default function SentreiBanner(): JSX.Element {
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
      <Banner key={i18n.language} />
    </div>
  );
}
