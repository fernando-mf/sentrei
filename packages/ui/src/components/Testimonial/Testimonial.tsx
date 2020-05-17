/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import React from "react";

import TestimonialStyles from "./TestimonialStyles";

export default function Testimonial(): JSX.Element {
  const classes = TestimonialStyles();
  return (
    <Container maxWidth="lg" component="main" className={classes.testimonial}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <Avatar />
            <Typography variant="h4" className={classes.title}>
              Adam Banner
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <Avatar />
            <Typography variant="h4" className={classes.title}>
              Phil Smith
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <Avatar />
            <Typography variant="h4" className={classes.title}>
              Stephanie West
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
