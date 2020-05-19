/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import React from "react";

import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

export default function Testimonial(): JSX.Element {
  return (
    <>
      <Section title="Testimonial" subTitle="" />
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
