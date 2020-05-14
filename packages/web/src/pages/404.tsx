import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {GetServerSideProps} from "next";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Copyright from "@sentrei/ui/components/Copyright";
import Link from "@sentrei/ui/components/Link";
import ProTip from "@sentrei/ui/components/ProTip";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Custom404({t}: any): JSX.Element {
  return (
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
  );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async () => {
  const namespacesRequired = ["common", "_error"];

  return {
    props: {
      namespacesRequired,
    },
  };
};

export default withTranslation("common")(Custom404);
