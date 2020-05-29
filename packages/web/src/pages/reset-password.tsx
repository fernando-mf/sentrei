/* eslint-disable @typescript-eslint/no-var-requires */

import React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import Auth from "@sentrei/ui/components/Auth";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ResetPassword(): JSX.Element {
  const {t} = useTranslation();
  return (
    <>
      <SentreiHeader
        sign={false}
        spy={false}
        faqText={t("headerFaq")}
        featuresText={t("headerFeatures")}
        pricingText={t("headerPricing")}
        productText={t("headerProduct")}
        loginText={t("headerLogin")}
        signupText={t("headerSignup")}
        testimonialText={t("headerTestimonial")}
      />{" "}
      <Auth type={authType.reset} />;
    </>
  );
}

ResetPassword.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default ResetPassword;
