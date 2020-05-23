import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/interfaces/Testimonial";
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
  return (
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
  );
}
