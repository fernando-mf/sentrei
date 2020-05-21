/* eslint-disable @typescript-eslint/no-var-requires */

import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Login from "@sentrei/ui/components/Signin";
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
        signInText={t("headerSignIn")}
        signUpText={t("headerSignUp")}
        testimonialText={t("headerTestimonial")}
      />
      <Login />;
    </>
  );
}

About.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation()(About);
