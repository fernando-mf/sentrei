/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import React from "react";

import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

import TestimonialStyles from "./TestimonialStyles";

export default function Testimonial(): JSX.Element {
  const classes = TestimonialStyles();
  return (
    <>
      <Section title="" subTitle="" />
      <Container maxWidth="lg" component="main">
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
