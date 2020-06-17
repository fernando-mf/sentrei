import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Faq from "@sentrei/ui/components/Faq";

export default function SentreiFaq(): JSX.Element {
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
      <Faq key={i18n.language} />
    </div>
  );
}
