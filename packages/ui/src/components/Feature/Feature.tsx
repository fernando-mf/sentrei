/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";

import FeatureCard from "@sentrei/ui/components/FeatureCard";
import Section from "@sentrei/ui/components/Section";

import FeatureStyles from "./FeatureStyles";

export default function Feature(props: any): JSX.Element {
  const classes = FeatureStyles();
  const {
    imgOne,
    titleOne,
    subTitleOne,
    imgTwo,
    titleTwo,
    subTitleTwo,
    imgThree,
    titleThree,
    subTitleThree,
  } = props;

  return (
    <>
      <Section title="Features" subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={classes.item}>
            <FeatureCard img={imgOne} title={titleOne} subTitle={subTitleOne} />
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <FeatureCard img={imgTwo} title={titleTwo} subTitle={subTitleTwo} />
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <FeatureCard
              img={imgThree}
              title={titleThree}
              subTitle={subTitleThree}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Feature.propTypes = {
  imgOne: PropTypes.node.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  imgTwo: PropTypes.node.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  imgThree: PropTypes.node.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
