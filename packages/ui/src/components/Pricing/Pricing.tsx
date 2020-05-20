/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";

import PricingCard from "@sentrei/ui/components/PricingCard";
import Section from "@sentrei/ui/components/Section";

const tiers = [
  {
    title: "Free",
    subTitle: "",
    price: "$0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subTitle: "Most popular",
    price: "$10",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    subTitle: "",
    price: "$30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Pricing(props: any): JSX.Element {
  const {
    buttonTextOne,
    buttonVariantOne,
    descriptionOne,
    priceOne,
    titleOne,
    subTitleOne,
    buttonTextTwo,
    buttonVariantTwo,
    descriptionTwo,
    priceTwo,
    titleTwo,
    subTitleTwo,
    buttonTextThree,
    buttonVariantThree,
    descriptionThree,
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
              buttonVariant={buttonVariantOne}
              description={[descriptionOne]}
              price={priceOne}
              title={titleOne}
              subTitle={subTitleOne}
            />
          </Grid>
          <Grid item key={titleTwo} xs={12} sm={4}>
            <PricingCard
              buttonText={buttonTextTwo}
              buttonVariant={buttonVariantTwo}
              description={[descriptionTwo]}
              price={priceTwo}
              title={titleTwo}
              subTitle={subTitleTwo}
            />
          </Grid>
          <Grid item key={titleThree} xs={12} sm={4}>
            <PricingCard
              buttonText={buttonTextThree}
              buttonVariant={buttonVariantThree}
              description={[descriptionThree]}
              price={priceThree}
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
  buttonTextOne: PropTypes.string.isRequired,
  buttonVariantOne: PropTypes.string.isRequired,
  descriptionOne: PropTypes.string.isRequired,
  priceOne: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  buttonTextTwo: PropTypes.string.isRequired,
  buttonVariantTwo: PropTypes.string.isRequired,
  descriptionTwo: PropTypes.string.isRequired,
  priceTwo: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  buttonTextThree: PropTypes.string.isRequired,
  buttonVariantThree: PropTypes.string.isRequired,
  descriptionThree: PropTypes.string.isRequired,
  priceThree: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  subTitleThree: PropTypes.string.isRequired,
};
