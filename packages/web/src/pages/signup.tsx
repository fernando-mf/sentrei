/* eslint-disable @typescript-eslint/no-var-requires */

import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import Auth from "@sentrei/ui/components/Auth";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function About({t}: any): JSX.Element {
  return (
    <>
      <SentreiHeader
        sign={false}
        spy={false}
        faqText={t("headerFaq")}
        featuresText={t("headerFeatures")}
        pricingText={t("headerPricing")}
        productText={t("headerProduct")}
        logInText={t("headerLogIn")}
        signUpText={t("headerSignUp")}
        testimonialText={t("headerTestimonial")}
      />
      <Auth type={authType.signup} />;
    </>
  );
}

About.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation()(About);
