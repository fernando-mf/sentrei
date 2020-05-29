/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Router from "next/router";
import * as React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Spaces = (props: any): any => {
  const {t} = useTranslation();

  Router.push("/");

  return (
    <>
      <SentreiAppHeader
        faqText={t("headerFaq")}
        featuresText={t("headerFeatures")}
        pricingText={t("headerPricing")}
        productText={t("headerProduct")}
        logInText={t("headerLogIn")}
        signUpText={t("headerSignUp")}
        testimonialText={t("headerTestimonial")}
      />
    </>
  );
};

Spaces.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Spaces;
