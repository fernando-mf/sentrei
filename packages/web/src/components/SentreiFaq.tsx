import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Faq";
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
  return (
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
  );
}
