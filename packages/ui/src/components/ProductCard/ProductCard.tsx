/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import ProductStyles from "./ProductCardStyles";

export default function ProductCard(props: any): JSX.Element {
  const classes = ProductStyles();
  const {left, img} = props;

  return (
    <>
      <Grid item xs={false} sm={left ? 4 : 8} md={left ? 5 : 7}>
        {img}
      </Grid>
      <Grid
        item
        xs={12}
        sm={left ? 8 : 4}
        md={left ? 7 : 5}
        className={classes.item}
      >
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
      </Grid>
    </>
  );
}

ProductCard.propTypes = {
  left: PropTypes.bool.isRequired,
  img: PropTypes.node.isRequired,
};
