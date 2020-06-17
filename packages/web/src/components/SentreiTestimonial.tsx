import React from "react";

import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/types/components/Testimonial";
import {analytics} from "@sentrei/common/utils/firebase";
import Testimonial from "@sentrei/ui/components/Testimonial";
import FocusPicture from "@sentrei/web/components/Picture/FocusPicture";

type Props = Omit<Original, "imgOne" | "imgTwo" | "imgThree">;

export default function SentreiTestimonial({
  sectionTitle,
  authorOne,
  bodyOne,
  occupationOne,
  titleOne,
  authorTwo,
  bodyTwo,
  occupationTwo,
  titleTwo,
  authorThree,
  bodyThree,
  occupationThree,
  titleThree,
}: Props): JSX.Element {
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
        sectionTitle={sectionTitle}
        authorOne={authorOne}
        bodyOne={bodyOne}
        imgOne={<FocusPicture />}
        occupationOne={occupationOne}
        titleOne={titleOne}
        authorTwo={authorTwo}
        bodyTwo={bodyTwo}
        imgTwo={<FocusPicture />}
        occupationTwo={occupationTwo}
        titleTwo={titleTwo}
        authorThree={authorThree}
        bodyThree={bodyThree}
        imgThree={<FocusPicture />}
        occupationThree={occupationThree}
        titleThree={titleThree}
      />
    </div>
  );
}
