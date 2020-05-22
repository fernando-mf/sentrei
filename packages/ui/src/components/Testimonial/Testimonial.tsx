/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";
import React from "react";

import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

export default function Testimonial(props: any): JSX.Element {
  const {authorOne, bodyOne, imgOne, occupationOne, titleOne} = props;

  return (
    <>
      <Section title="Testimonial" subTitle="" />
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
              author={authorOne}
              body={bodyOne}
              img={imgOne}
              occupation={occupationOne}
              title={titleOne}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              author={authorOne}
              body={bodyOne}
              img={imgOne}
              occupation={occupationOne}
              title={titleOne}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Testimonial.propTypes = {
  authorOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  imgOne: PropTypes.node.isRequired,
  occupationOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
};
