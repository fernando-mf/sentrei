import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/types/components/Header";
import Header from "@sentrei/ui/components/Header";
import LogoPicture from "@sentrei/web/components/Picture/LogoPicture";

type Props = Omit<Original, "logo">;

export default function SentreiHeader({
  faqText,
  featuresText,
  pricingText,
  productText,
  loginText,
  signupText,
  sign = true,
  spy = true,
  testimonialText,
}: Props): JSX.Element {
  return (
    <Header
      key={i18n.language}
      faqText={faqText}
      featuresText={featuresText}
      pricingText={pricingText}
      productText={productText}
      loginText={loginText}
      signupText={signupText}
      testimonialText={testimonialText}
      sign={sign}
      spy={spy}
      logo={<LogoPicture />}
    />
  );
}
