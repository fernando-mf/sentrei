import {NextPage} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {useTranslation, withTranslation} from "@sentrei/common/i18n";
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
  ssr: false,
});
const SentreiPricing = dynamic(
  () => import("@sentrei/web/components/SentreiPricing"),
  {
    ssr: false,
  },
);
const SentreiProduct = dynamic(
  () => import("@sentrei/web/components/SentreiProduct"),
  {
    ssr: false,
  },
);
const SentreiSlider = dynamic(
  () => import("@sentrei/web/components/SentreiSlider"),
  {
    ssr: false,
  },
);
const SentreiScreen = dynamic(
  () => import("@sentrei/web/components/SentreiScreen"),
  {
    ssr: false,
  },
);
const SentreiTestimonial = dynamic(
  () => import("@sentrei/web/components/SentreiTestimonial"),
  {
    ssr: false,
  },
);

const Index: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

  React.useEffect(() => {
    analytics().setCurrentScreen("landing");
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
      <SentreiHeader />
      <SentreiBanner />
      <Spacing />
      <SentreiScreen />
      <Spacing />
      <div id="product">
        <SentreiProduct />
      </div>
      <SentreiSlider />
      <Spacing />
      <div id="feature">
        <SentreiFeature />
      </div>
      <Spacing />
      <div id="testimonial">
        <SentreiTestimonial />
      </div>
      <Spacing />
      <div id="pricing">
        <SentreiPricing />
      </div>
      <Spacing />
      <div id="faq">
        <SentreiFaq />
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
    namespacesRequired: ["index", "common"],
  };
};

export default withTranslation()(Index);
