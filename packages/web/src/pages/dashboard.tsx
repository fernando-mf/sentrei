/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {withTranslation} from "@sentrei/common/i18n";
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
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.3rem",
          }}
        />
        <li>
          <span>Display Name:</span> {user.displayName}
        </li>
        <li>
          <span>Email:</span> {user.email}
        </li>
        <li>
          <span>Email Verification Status:</span>{" "}
          {user.emailVerified === true ? "Verified" : "Not Verified"}
        </li>
        <li>
          <span>User ID:</span> {user.uid}
        </li>
        <li>
          <span>Last Login:</span> {user.metadata.lastSignInTime}
        </li>
        <li>
          <span>Date Joined:</span> {user.metadata.creationTime}
        </li>
      </>
    );
  }
};

export default withAuthGuard(withTranslation()(Dashboard));
