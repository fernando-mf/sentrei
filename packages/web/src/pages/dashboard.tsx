import {NextPage} from "next";
import Router from "next/router";
import * as React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";
import SpaceFab from "@sentrei/ui/components/SpaceFab";
import GlobalContext from "@sentrei/web/components/HOC/GlobalContext";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Dashboard: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

  React.useEffect(() => {
    analytics().setCurrentScreen("home");
  }, []);

  if (user === undefined) {
    return <Loader />;
  }

  if (!user) {
    Router.push("/");
  }

  return (
    <>
      <SentreiAppHeader
        faqText={t("headerFaq")}
        featuresText={t("headerFeatures")}
        pricingText={t("headerPricing")}
        productText={t("headerProduct")}
        loginText={t("headerLogin")}
        signupText={t("headerSignup")}
        testimonialText={t("headerTestimonial")}
      />
      <SpaceFab />
    </>
  );
};

Dashboard.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Dashboard;
