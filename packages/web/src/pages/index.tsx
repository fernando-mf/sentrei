import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Landing from "@sentrei/ui/components/Landing";
import Link from "@sentrei/ui/components/Link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({t}: any): JSX.Element => (
  <>
    <Head>
      <title>Sentrei</title>
      <meta name="Description" content="Sentrei landing page" />
    </Head>
    <Landing>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          {t("title")}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Container>
    </Landing>
  </>
);

Index.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["common", "index"],
});

export default withTranslation("common")(Index);
