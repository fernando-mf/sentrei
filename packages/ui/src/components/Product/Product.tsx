/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

import ProductStyles from "./ProductStyles";

export default function Product(): JSX.Element {
  const classes = ProductStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Grid>
    </Grid>
  );
}
