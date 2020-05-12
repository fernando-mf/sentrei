/* eslint-disable global-require */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Header from "@sentrei/ui/components/Header";
import Link from "@sentrei/ui/components/Link";
import Particle from "@sentrei/ui/components/Particle";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({t}: any): JSX.Element => (
  <>
    <Head>
      <title>Sentrei</title>
      <meta name="Description" content="Sentrei landing page" />
    </Head>
    <img src={require("assets/images/banner.png")} alt="logo" />
    <Header
      logo={
        <picture>
          <source
            srcSet={require("@assets/images/banner.png?webp")}
            type="image/webp"
          />
          <source
            srcSet={require("@assets/images/banner.png")}
            type="image/png"
          />
          <img src={require("@assets/images/banner.png")} alt="logo" />
        </picture>
      }
    />
    <Particle />
    <Container maxWidth="sm">
      <Box pt={10} />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Container>
    <Box pt={300} />
    <section id="section-1">section 1</section>
    <Box pt={300} />
    <section id="section-2">section 2</section>
    <Box pt={300} />
    <section id="section-3">section 3</section>
  </>
);

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation("index")(Index);
