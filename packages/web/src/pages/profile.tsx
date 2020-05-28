/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Profile from "@sentrei/ui/components/Profile";
import withAuthGuard from "@sentrei/web/components/HOC/withAuthGuard";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Dashboard = (props: any): any => {
  const {auth, t} = props;
  const {user} = auth;

  if (user) {
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
        <Profile {...props} />
      </>
    );
  }
};

export default withAuthGuard(withTranslation()(Dashboard));
