/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import ProductStyles from "./ProductStyles";

export default function Product(props: any): JSX.Element {
  const classes = ProductStyles();
  const {img} = props;

  return (
    <Container maxWidth="lg" component="main" className={classes.product}>
      <Grid container alignItems="center" justify="center" component="main">
        <Grid item xs={false} sm={4} md={5}>
          {img}
        </Grid>
        <Grid item xs={12} sm={8} md={7} className={classes.item}>
          <Box py={3} />
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            component="p"
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
        </Grid>
      </Grid>
      <Box py={3} />
      <Grid container alignItems="center" justify="center" component="main">
        <Grid item xs={12} sm={8} md={7} className={classes.item}>
          <Box py={3} />
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            component="p"
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4} md={5}>
          {img}
        </Grid>
      </Grid>
      <Box py={3} />
      <Grid container alignItems="center" justify="center" component="main">
        <Grid item xs={false} sm={4} md={5}>
          {img}
        </Grid>
        <Grid item xs={12} sm={8} md={7} className={classes.item}>
          <Box py={3} />
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            component="p"
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

Product.propTypes = {
  img: PropTypes.node.isRequired,
};
