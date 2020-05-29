/* eslint-disable @typescript-eslint/no-var-requires */

import Router from "next/router";
import React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import Auth from "@sentrei/ui/components/Auth";
import Loader from "@sentrei/ui/components/Loader";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SignUp(props: any): JSX.Element {
  const {
    auth: {user},
  } = props;
  const {t} = useTranslation();

  React.useEffect(() => {
    if (user) {
      Router.push("/dashboard");
    }
  });

  return (
    <>
      {user ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

SignUp.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default SignUp;
