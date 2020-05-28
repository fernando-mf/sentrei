import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/interfaces/Header";
import AppHeader from "@sentrei/ui/components/AppHeader";
import LogoPicture from "@sentrei/web/components/Picture/LogoPicture";

type Props = Omit<Original, "logo">;

export default function SentreiHeader({
  faqText,
  featuresText,
  pricingText,
  productText,
  logInText,
  signUpText,
  sign = true,
  spy = true,
  testimonialText,
}: Props): JSX.Element {
  return (
    <AppHeader
      key={i18n.language}
      faqText={faqText}
      featuresText={featuresText}
      pricingText={pricingText}
      productText={productText}
      logInText={logInText}
      signUpText={signUpText}
      testimonialText={testimonialText}
      sign={sign}
      spy={spy}
      logo={<LogoPicture />}
    />
  );
}
