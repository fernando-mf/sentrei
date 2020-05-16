/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import FeatureStyles from "./FeatureStyles";

export default function Feature(): JSX.Element {
  const classes = FeatureStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.feature}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Where remote software teams do their best work
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        Quickly build an effective pricing table for your potential customers
        with this layout. It&apos;s built with default Material-UI components
        with little customization.
      </Typography>
    </Container>
  );
}
