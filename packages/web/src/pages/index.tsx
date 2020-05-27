/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import Head from "next/head";
import Router from "next/router";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Footer from "@sentrei/ui/components/Footer";
import Loader from "@sentrei/ui/components/Loader";
import Spacing from "@sentrei/ui/components/Spacing";
import SentreiBanner from "@sentrei/web/components/SentreiBanner";
import SentreiFaq from "@sentrei/web/components/SentreiFaq";
import SentreiFeature from "@sentrei/web/components/SentreiFeature";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";
import SentreiPricing from "@sentrei/web/components/SentreiPricing";
import SentreiProduct from "@sentrei/web/components/SentreiProduct";
import SentreiScreen from "@sentrei/web/components/SentreiScreen";
import SentreiSlider from "@sentrei/web/components/SentreiSlider";
import SentreiTestimonial from "@sentrei/web/components/SentreiTestimonial";

const Index = (props: any) => {
  const {auth, t} = props;
  const {user} = auth;

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
          <Head>
            <title>Sentrei</title>
            <meta name="Description" content="Sentrei landing page" />
          </Head>
          <SentreiHeader
            faqText={t("headerFaq")}
            featuresText={t("headerFeatures")}
            pricingText={t("headerPricing")}
            productText={t("headerProduct")}
            logInText={t("headerLogIn")}
            signUpText={t("headerSignUp")}
            testimonialText={t("headerTestimonial")}
          />
          <SentreiBanner
            bannerBottom={t("bannerBannerBottom")}
            bannerText={t("bannerBannerText")}
            bannerTop={t("bannerBannerTop")}
            googleText={t("bannerGoogleText")}
            startText={t("bannerStartText")}
            typicalOne={t("bannerTypicalOne")}
            typicalTwo={t("bannerTypicalTwo")}
            typicalThree={t("bannerTypicalThree")}
          />
          <Spacing />
          <SentreiScreen
            labelOne={t("screenLabelOne")}
            labelTwo={t("screenLabelTwo")}
            labelThree={t("screenLabelThree")}
          />
          <Spacing />
          <div id="product">
            <SentreiProduct
              connectSubTitle={t("productConnectSubTitle")}
              connectTitle={t("productConnectTitle")}
              dataSubTitle={t("productDataSubTitle")}
              dataTitle={t("productDataTitle")}
              videoSubTitle={t("productVideoSubTitle")}
              videoTitle={t("productVideoTitle")}
            />
          </div>
          <SentreiSlider sectionTitle={t("sliderSectionTitle")} />
          <Spacing />
          <div id="feature">
            <SentreiFeature
              sectionTitle={t("featureSectionTitle")}
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
              sectionTitle={t("testimonialSectionTitle")}
              authorOne={t("testimonialAuthorOne")}
              bodyOne={t("testimonialBodyOne")}
              occupationOne={t("testimonialOccupationOne")}
              titleOne={t("testimonialTitleOne")}
              authorTwo={t("testimonialAuthorTwo")}
              bodyTwo={t("testimonialBodyTwo")}
              occupationTwo={t("testimonialOccupationTwo")}
              titleTwo={t("testimonialTitleTwo")}
              authorThree={t("testimonialAuthorThree")}
              bodyThree={t("testimonialBodyThree")}
              occupationThree={t("testimonialOccupationThree")}
              titleThree={t("testimonialTitleThree")}
            />
          </div>
          <Spacing />
          <div id="pricing">
            <SentreiPricing
              sectionTitle={t("pricingSectionTitle")}
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
            <SentreiFaq
              sectionTitle={t("faqSectionTitle")}
              titleOne={t("faqTitleOne")}
              bodyOne={t("faqBodyOne")}
              titleTwo={t("faqTitleTwo")}
              bodyTwo={t("faqBodyTwo")}
              titleThree={t("faqTitleThree")}
              bodyThree={t("faqBodyThree")}
            />
          </div>
          <Spacing />
          <Footer />
        </>
      )}
    </>
  );
};

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation()(Index);
