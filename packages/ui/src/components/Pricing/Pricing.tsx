/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";

import PricingCard from "@sentrei/ui/components/PricingCard";
import Section from "@sentrei/ui/components/Section";

export default function Pricing(props: any): JSX.Element {
  const {
    priceMonth,
    buttonTextOne,
    description1One,
    description2One,
    description3One,
    priceOne,
    titleOne,
    subTitleOne,
    buttonTextTwo,
    description1Two,
    description2Two,
    description3Two,
    priceTwo,
    titleTwo,
    subTitleTwo,
    buttonTextThree,
    description1Three,
    description2Three,
    description3Three,
    priceThree,
    titleThree,
    subTitleThree,
  } = props;

  return (
    <>
      <Section title="Pricing" subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item key={titleOne} xs={12} sm={4}>
            <PricingCard
              buttonText={buttonTextOne}
              buttonVariant="outlined"
              description1={description1One}
              description2={description2One}
              description3={description3One}
              price={priceOne}
              priceMonth={priceMonth}
              title={titleOne}
              subTitle={subTitleOne}
            />
          </Grid>
          <Grid item key={titleTwo} xs={12} sm={4}>
            <PricingCard
              buttonText={buttonTextTwo}
              buttonVariant="contained"
              description1={description1Two}
              description2={description2Two}
              description3={description3Two}
              price={priceTwo}
              priceMonth={priceMonth}
              title={titleTwo}
              subTitle={subTitleTwo}
            />
          </Grid>
          <Grid item key={titleThree} xs={12} sm={4}>
            <PricingCard
              buttonText={buttonTextThree}
              buttonVariant="outlined"
              description1={description1Three}
              description2={description2Three}
              description3={description3Three}
              price={priceThree}
              priceMonth={priceMonth}
              title={titleThree}
              subTitle={subTitleThree}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Pricing.propTypes = {
  priceMonth: PropTypes.string.isRequired,
  buttonTextOne: PropTypes.string.isRequired,
  description1One: PropTypes.string.isRequired,
  description2One: PropTypes.string.isRequired,
  description3One: PropTypes.string.isRequired,
  priceOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  buttonTextTwo: PropTypes.string.isRequired,
  description1Two: PropTypes.string.isRequired,
  description2Two: PropTypes.string.isRequired,
  description3Two: PropTypes.string.isRequired,
  priceTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  buttonTextThree: PropTypes.string.isRequired,
  description1Three: PropTypes.string.isRequired,
  description2Three: PropTypes.string.isRequired,
  description3Three: PropTypes.string.isRequired,
  priceThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
