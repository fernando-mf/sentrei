import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import Typography from "@material-ui/core/Typography";
import withWidth, {isWidthUp, isWidthDown} from "@material-ui/core/withWidth";
import React from "react";

import Tilt from "react-parallax-tilt";

import ProductStyles from "./ProductCardStyles";

interface Props {
  left: boolean;
  img: JSX.Element;
  subTitle: string;
  title: string;
  width: Breakpoint;
}

function ProductCard({left, img, subTitle, title, width}: Props): JSX.Element {
  const classes = ProductStyles();

  const Picture = (
    <Grid item xs={false} sm={4} md={5}>
      <Tilt
        // TODO: https://github.com/mkosir/react-parallax-tilt/issues/8
        reset
        scale={1.1}
        transitionSpeed={2500}
        tiltEnable={false}
        className={classes.tilt}
      >
        {img}
      </Tilt>
    </Grid>
  );

  return (
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
  );
}

export default withWidth()(ProductCard);
