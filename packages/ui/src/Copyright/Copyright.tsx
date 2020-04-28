import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

export default function Copyright(): JSX.Element {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://sentrei.com/">
        Sentrei, Inc.
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
