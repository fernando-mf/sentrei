/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

import FeatureCard from "@sentrei/ui/components/FeatureCard";
import Section from "@sentrei/ui/components/Section";

export default function Feature(): JSX.Element {
  return (
    <>
      <Section title="Features" subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FeatureCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
