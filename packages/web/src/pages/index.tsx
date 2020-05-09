import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Header from "@sentrei/ui/components/Header";
import Link from "@sentrei/ui/components/Link";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({t}: any): JSX.Element => (
  <>
    <Head>
      <title>Sentrei</title>
      <meta name="Description" content="Sentrei landing page" />
    </Head>
    <Header fixed />
    <Container maxWidth="sm">
      <Box pt={10} />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Container>
  </>
);

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation("index")(Index);
