import {NextPage} from "next";
import Router from "next/router";
import React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import {analytics} from "@sentrei/common/utils/firebase";
import Auth from "@sentrei/ui/components/Auth";
import Loader from "@sentrei/ui/components/Loader";
import GlobalContext from "@sentrei/web/components/HOC/GlobalContext";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";

const Signup: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

  React.useEffect(() => {
    analytics().setCurrentScreen("signup");
  }, []);

  if (user === undefined) {
    return <Loader />;
  }

  if (user) {
    Router.push("/dashboard");
  }

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
      />
      <Auth type={authType.signup} />;
    </>
  );
};

Signup.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Signup;
