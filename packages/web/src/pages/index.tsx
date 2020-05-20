/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Faq from "@sentrei/ui/components/Faq";
import Feature from "@sentrei/ui/components/Feature";
import Footer from "@sentrei/ui/components/Footer";
import Pricing from "@sentrei/ui/components/Pricing";
import Spacing from "@sentrei/ui/components/Spacing";
import Testimonial from "@sentrei/ui/components/Testimonial";
import SentreiBanner from "@sentrei/web/components/SentreiBanner";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";
import SentreiProduct from "@sentrei/web/components/SentreiProduct";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Index({t}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Sentrei</title>
        <meta name="Description" content="Sentrei landing page" />
      </Head>
      <SentreiHeader
        faqText={t("faq")}
        featuresText={t("features")}
        pricingText={t("pricing")}
        productText={t("product")}
        signInText={t("signIn")}
        signUpText={t("signUp")}
        spy
        testimonialText={t("testimonial")}
      />
      <SentreiBanner
        bannerBottom={t("bannerBottom")}
        bannerText={t("bannerText")}
        bannerTop={t("bannerTop")}
        googleText={t("googleText")}
        startText={t("startText")}
        typicalOne={t("typicalOne")}
        typicalTwo={t("typicalTwo")}
        typicalThree={t("typicalThree")}
      />
      <Spacing />
      <div id="product">
        <SentreiProduct
          connectSubTitle={t("connectSubTitle")}
          connectTitle={t("connectTitle")}
          dataSubTitle={t("dataSubTitle")}
          dataTitle={t("dataTitle")}
          videoSubTitle={t("videoSubTitle")}
          videoTitle={t("videoTitle")}
        />
      </div>
      <Spacing />
      <div id="feature">
        <Feature />
      </div>
      <Spacing />
      <div id="testimonial">
        <Testimonial />
      </div>
      <Spacing />
      <div id="pricing">
        <Pricing />
      </div>
      <Spacing />
      <div id="faq">
        <Faq />
      </div>
      <Spacing />
      <Footer />
    </>
  );
}

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation()(Index);
