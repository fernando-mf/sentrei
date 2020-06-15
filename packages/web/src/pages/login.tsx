import {NextPage} from "next";
import dynamic from "next/dynamic";
import Router from "next/router";
import React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";

const Auth = dynamic(() => import("@sentrei/ui/components/Auth"), {
  loading: () => <Loader />,
  ssr: false,
});

const SentreiHeader = dynamic(
  () => import("@sentrei/web/components/SentreiHeader"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

const Login: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

  React.useEffect(() => {
    analytics().setCurrentScreen("login");
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
      <Auth type={authType.login} />;
    </>
  );
};

Login.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Login;
