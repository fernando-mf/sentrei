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
          buttonTextOne={t("buttonTextOne")}
          buttonVariantOne={t("buttonVariantOne")}
          descriptionOne={t("descriptionOne")}
          priceOne={t("priceOne")}
          titleOne={t("titleOne")}
          subTitleOne={t("subTitleOne")}
          buttonTextTwo={t("buttonTextTwo")}
          buttonVariantTwo={t("buttonVariantTwo")}
          descriptionTwo={t("descriptionTwo")}
          priceTwo={t("priceTwo")}
          titleTwo={t("titleTwo")}
          subTitleTwo={t("subTitleTwo")}
          buttonTextThree={t("buttonTextThree")}
          buttonVariantThree={t("buttonVariantThree")}
          descriptionThree={t("descriptionThree")}
          priceThree={t("priceThree")}
          titleThree={t("titleThree")}
          subTitleThree={t("subTitleThree")}
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
