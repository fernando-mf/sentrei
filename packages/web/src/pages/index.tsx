import {NextPage} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {useTranslation} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Footer from "@sentrei/ui/components/Footer";
import Loader from "@sentrei/ui/components/Loader";
import Spacing from "@sentrei/ui/components/Spacing";

const SentreiHeader = dynamic(
  () => import("@sentrei/web/components/SentreiHeader"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiBanner = dynamic(
  () => import("@sentrei/web/components/SentreiBanner"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiFeature = dynamic(
  () => import("@sentrei/web/components/SentreiFeature"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiFaq = dynamic(() => import("@sentrei/web/components/SentreiFaq"), {
  loading: () => <Loader />,
  ssr: false,
});
const SentreiPricing = dynamic(
  () => import("@sentrei/web/components/SentreiPricing"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiProduct = dynamic(
  () => import("@sentrei/web/components/SentreiProduct"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiSlider = dynamic(
  () => import("@sentrei/web/components/SentreiSlider"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiScreen = dynamic(
  () => import("@sentrei/web/components/SentreiScreen"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
const SentreiTestimonial = dynamic(
  () => import("@sentrei/web/components/SentreiTestimonial"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

const Index: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

  React.useEffect(() => {
    analytics().setCurrentScreen("home");
  }, []);

  if (user === undefined) {
    return <Loader />;
  }

  if (user) {
    Router.push("/dashboard");
  }

  return (
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
        loginText={t("headerLogin")}
        signupText={t("headerSignup")}
        testimonialText={t("headerTestimonial")}
      />
      <SentreiBanner
        bannerBottom={t("bannerBannerBottom")}
        bannerBottomRough={t("bannerBannerBottomRough")}
        bannerTextOne={t("bannerBannerTextOne")}
        bannerTextTwo={t("bannerBannerTextTwo")}
        bannerTextThree={t("bannerBannerTextThree")}
        bannerTextRough={t("bannerBannerTextRough")}
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
          connectTitleOne={t("productConnectTitleOne")}
          connectTitleTwo={t("productConnectTitleTwo")}
          connectTitleThree={t("productConnectTitleThree")}
          dataSubTitle={t("productDataSubTitle")}
          dataTitleOne={t("productDataTitleOne")}
          dataTitleTwo={t("productDataTitleTwo")}
          dataTitleThree={t("productDataTitleThree")}
          videoSubTitle={t("productVideoSubTitle")}
          videoTitleOne={t("productVideoTitleOne")}
          videoTitleTwo={t("productVideoTitleTwo")}
          videoTitleThree={t("productVideoTitleThree")}
        />
      </div>
      <SentreiSlider
        sectionTitleOne={t("sliderSectionTitleOne")}
        sectionTitleTwo={t("sliderSectionTitleTwo")}
        sectionTitleThree={t("sliderSectionTitleThree")}
      />
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
  );
};

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: ["index"],
  };
};

export default Index;
