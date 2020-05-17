/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Banner from "@sentrei/ui/components/Banner";
import Feature from "@sentrei/ui/components/Feature";
import Footer from "@sentrei/ui/components/Footer";
import Testimonial from "@sentrei/ui/components/Testimonial";
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
      <div id="section-1">
        <Banner />
      </div>
      <div id="section-2">
        <Feature />
      </div>
      <div id="section-3">
        <Testimonial />
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
