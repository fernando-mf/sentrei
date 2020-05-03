import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@sentrei/ui/components/Link";
import Copyright from "@sentrei/ui/components/Copyright";
import ProTip from "@sentrei/ui/components/ProTip";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sentrei</title>
        <meta name="Description" content="Sentrei landing page" />
      </Head>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
