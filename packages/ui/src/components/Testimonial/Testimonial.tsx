import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import React from "react";

import Props from "@sentrei/common/types/components/Testimonial";
import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

export default function Testimonial({
  sectionTitle,
  authorOne,
  bodyOne,
  imgOne,
  occupationOne,
  titleOne,
  authorTwo,
  bodyTwo,
  imgTwo,
  occupationTwo,
  titleTwo,
  authorThree,
  bodyThree,
  imgThree,
  occupationThree,
  titleThree,
}: Props): JSX.Element {
  return (
    <>
      <Section title={sectionTitle} subTitle="" />
      <Container maxWidth="lg" component="main">
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              author={authorOne}
              body={bodyOne}
              img={imgOne}
              occupation={occupationOne}
              title={titleOne}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              author={authorTwo}
              body={bodyTwo}
              img={imgTwo}
              occupation={occupationTwo}
              title={titleTwo}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              author={authorThree}
              body={bodyThree}
              img={imgThree}
              occupation={occupationThree}
              title={titleThree}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
