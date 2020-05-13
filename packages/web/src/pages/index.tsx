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
    <Header logo={<></>} />
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
    <div className="row" id="section-1">
      <picture>
        <source
          srcSet={require("../../public/images/banner.png?webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../public/images/banner.png")}
          type="image/jpeg"
        />
        <img src={require("../../public/images/banner.png")} alt="logo" />
      </picture>
    </div>
    <div className="row" id="section-2">
      <picture>
        <source
          srcSet={require("../../public/images/banner.png?webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../public/images/banner.png")}
          type="image/jpeg"
        />
        <img src={require("../../public/images/banner.png")} alt="logo" />
      </picture>
    </div>
    <div className="row" id="section-3">
      <picture>
        <source
          srcSet={require("../../public/images/banner.png?webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../public/images/banner.png")}
          type="image/jpeg"
        />
        <img src={require("../../public/images/banner.png")} alt="logo" />
      </picture>
    </div>

    <style jsx>{`
      .row {
        max-width: 880px;
        margin: 300px auto 40px;
      }
      img {
        max-width: 100%;
      }
    `}</style>
  </>
);

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation("index")(Index);
