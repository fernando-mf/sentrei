import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import {withTranslation} from "@sentrei/common/i18n";
import Copyright from "@sentrei/ui/components/Copyright";
import Link from "@sentrei/ui/components/Link";
import ProTip from "@sentrei/ui/components/ProTip";

function About(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sentrei
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

About.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
