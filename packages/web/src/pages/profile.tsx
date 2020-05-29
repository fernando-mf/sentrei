/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Router from "next/router";
import * as React from "react";

import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import Loader from "@sentrei/ui/components/Loader";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";
import SentreiProfile from "@sentrei/web/components/SentreiProfile";

const Profile = (props: any): any => {
  const {
    auth: {user},
  } = props;
  const {t} = useTranslation();

  React.useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  });

  return (
    <>
      {user ? (
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
          <SentreiProfile userEmail={user.email} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

Profile.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Profile;
