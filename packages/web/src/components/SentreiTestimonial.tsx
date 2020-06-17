import React from "react";

import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Testimonial from "@sentrei/ui/components/Testimonial";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";

export default function SentreiTestimonial(): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "testimonial"});
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Testimonial
        key={i18n.language}
        imgOne={<FocusPicture />}
        imgTwo={<FocusPicture />}
        imgThree={<FocusPicture />}
      />
    </div>
  );
}
