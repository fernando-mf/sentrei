import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Copyright(): JSX.Element {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://sentrei.com/">
          Sentrei, Inc.
        </MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Environment: {process.env.SENTRY_ENVIRONMENT}
        <br />
        Version: {process.env.SENTREI_VERSION}
      </Typography>
    </>
  );
}
