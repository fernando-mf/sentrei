/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import Divider from "@material-ui/core/Divider";
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Banner from "@sentrei/ui/components/Banner";
import Faq from "@sentrei/ui/components/Faq";
import Feature from "@sentrei/ui/components/Feature";
import Footer from "@sentrei/ui/components/Footer";
import Testimonial from "@sentrei/ui/components/Testimonial";
import SentreiProduct from "@sentrei/web/components/SentreiProduct";
import SpyHeader from "@sentrei/web/components/SpyHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Index({t}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Sentrei</title>
        <meta name="Description" content="Sentrei landing page" />
      </Head>
      <SpyHeader />
      <Banner />
      <div id="product">
        <SentreiProduct />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="faq">
        <Faq />
      </div>
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
