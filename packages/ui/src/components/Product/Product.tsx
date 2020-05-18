/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import ProductStyles from "./ProductStyles";

export default function Product(props: any): JSX.Element {
  const classes = ProductStyles();
  const {img} = props;

  return (
    <Container maxWidth="lg" component="main" className={classes.product}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7}>
          {img}
        </Grid>
        <Grid item xs={12} sm={8} md={5}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

Product.propTypes = {
  img: PropTypes.node.isRequired,
};
