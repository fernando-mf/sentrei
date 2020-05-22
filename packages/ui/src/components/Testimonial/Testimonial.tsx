/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";
import React from "react";

import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

export default function Testimonial(props: any): JSX.Element {
  const {
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
  } = props;

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

Testimonial.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  authorOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  imgOne: PropTypes.node.isRequired,
  occupationOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  authorTwo: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  imgTwo: PropTypes.node.isRequired,
  occupationTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  authorThree: PropTypes.string.isRequired,
  bodyThree: PropTypes.string.isRequired,
  imgThree: PropTypes.node.isRequired,
  occupationThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
};
