import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

import FeatureCard from "@sentrei/ui/components/FeatureCard";
import Section from "@sentrei/ui/components/Section";

import FeatureStyles from "./FeatureStyles";

interface Props {
  sectionTitle: string;
  imgOne: JSX.Element;
  titleOne: string;
  subTitleOne: string;
  imgTwo: JSX.Element;
  titleTwo: string;
  subTitleTwo: string;
  imgThree: JSX.Element;
  titleThree: string;
  subTitleThree: string;
}

export default function Feature({
  sectionTitle,
  imgOne,
  titleOne,
  subTitleOne,
  imgTwo,
  titleTwo,
  subTitleTwo,
  imgThree,
  titleThree,
  subTitleThree,
}: Props): JSX.Element {
  const classes = FeatureStyles();

  return (
    <>
      <Section title={sectionTitle} subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
          className={classes.container}
        >
          <Grid item xs={12} md={4}>
            <FeatureCard img={imgOne} title={titleOne} subTitle={subTitleOne} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard img={imgTwo} title={titleTwo} subTitle={subTitleTwo} />
          </Grid>
          <Grid item xs={12} md={4}>
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
