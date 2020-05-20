/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withWidth, {isWidthUp, isWidthDown} from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import React, {useState} from "react";

import Tilt from "react-parallax-tilt";

import ProductStyles from "./ProductCardStyles";

function ProductCard(props: any): JSX.Element {
  const classes = ProductStyles();
  const {left, img, subTitle, title, width} = props;
  const [scale, setScale] = useState(1.1);

  const Picture = (
    <Grid item xs={false} sm={4} md={5}>
      <Tilt scale={scale} transitionSpeed={2500} className={classes.tilt}>
        {img}
      </Tilt>
    </Grid>
  );

  return (
    <>
      <Grid container alignItems="center" justify="center" component="main">
        {left && Picture}
        {!left && isWidthDown("xs", width) && Picture}
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
        {!left && isWidthUp("sm", width) && Picture}
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

export default withWidth()(ProductCard);
