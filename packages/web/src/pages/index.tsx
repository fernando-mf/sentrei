/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Faq from "@sentrei/ui/components/Faq";
import Footer from "@sentrei/ui/components/Footer";
import Spacing from "@sentrei/ui/components/Spacing";
import SentreiBanner from "@sentrei/web/components/SentreiBanner";
import SentreiFeature from "@sentrei/web/components/SentreiFeature";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";
import SentreiPricing from "@sentrei/web/components/SentreiPricing";
import SentreiProduct from "@sentrei/web/components/SentreiProduct";
import SentreiTestimonial from "@sentrei/web/components/SentreiTestimonial";

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
        <SentreiFeature
          titleOne={t("featureTitleOne")}
          subTitleOne={t("featureSubTitleOne")}
          titleTwo={t("featureTitleTwo")}
          subTitleTwo={t("featureSubTitleTwo")}
          titleThree={t("featureTitleThree")}
          subTitleThree={t("featureSubTitleThree")}
        />
      </div>
      <Spacing />
      <div id="testimonial">
        <SentreiTestimonial
          authorOne={t("testimonialAuthorOne")}
          bodyOne={t("testimonialBodyOne")}
          occupationOne={t("testimonialOccupationOne")}
          titleOne={t("testimonialTitleOne")}
        />
      </div>
      <Spacing />
      <div id="pricing">
        <SentreiPricing
          priceMonth={t("pricingPriceMonth")}
          buttonTextOne={t("pricingButtonTextOne")}
          description1One={t("pricingDescription1One")}
          description2One={t("pricingDescription2One")}
          description3One={t("pricingDescription3One")}
          priceOne={t("pricingPriceOne")}
          titleOne={t("pricingTitleOne")}
          subTitleOne={t("pricingSubTitleOne")}
          buttonTextTwo={t("pricingButtonTextTwo")}
          description1Two={t("pricingDescription1Two")}
          description2Two={t("pricingDescription2Two")}
          description3Two={t("pricingDescription3Two")}
          priceTwo={t("pricingPriceTwo")}
          titleTwo={t("pricingTitleTwo")}
          subTitleTwo={t("pricingSubTitleTwo")}
          buttonTextThree={t("pricingButtonTextThree")}
          description1Three={t("pricingDescription1Three")}
          description2Three={t("pricingDescription2Three")}
          description3Three={t("pricingDescription3Three")}
          priceThree={t("pricingPriceThree")}
          titleThree={t("pricingTitleThree")}
          subTitleThree={t("pricingSubTitleThree")}
        />
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
