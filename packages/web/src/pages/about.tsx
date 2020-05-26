/* eslint-disable @typescript-eslint/no-var-requires */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Copyright from "@sentrei/ui/components/Copyright";

import Link from "@sentrei/ui/components/Link";
import ProTip from "@sentrei/ui/components/ProTip";
import SentreiHeader from "@sentrei/web/components/SentreiHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function About({t}: any): JSX.Element {
  return (
    <>
      <SentreiHeader
        spy={false}
        faqText={t("faq")}
        featuresText={t("features")}
        pricingText={t("pricing")}
        productText={t("product")}
        logInText={t("logIn")}
        signUpText={t("signUp")}
        testimonialText={t("testimonial")}
      />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("title")}
          </Typography>
          <Link href="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

About.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default withTranslation()(About);
