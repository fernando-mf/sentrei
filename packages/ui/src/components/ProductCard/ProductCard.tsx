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
  const {left, img, subTitle, title} = props;

  const Picture = (
    <Grid item xs={false} sm={4} md={5}>
      {img}
    </Grid>
  );

  return (
    <>
      <Grid container alignItems="center" justify="center" component="main">
        {left && Picture}
        <Grid item xs={12} sm={8} md={7} className={classes.item}>
          <Box py={3} />
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {subTitle}
          </Typography>
        </Grid>
        {!left && Picture}
      </Grid>
    </>
  );
}

ProductCard.propTypes = {
  left: PropTypes.bool.isRequired,
  img: PropTypes.node.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
