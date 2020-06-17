import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";

export default function SentreiPricing(): JSX.Element {
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
      <Pricing key={i18n.language} />
    </div>
  );
}
