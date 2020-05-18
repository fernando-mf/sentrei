/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

import PricingCard from "@sentrei/ui/components/PricingCard";
import Section from "@sentrei/ui/components/Section";

import PricingStyles from "./PricingStyles";

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
  const classes = PricingStyles();

  return (
    <>
      <Section title="Pricing" subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            <PricingCard
              buttonText={tier.buttonText}
              buttonVariant={tier.buttonVariant}
              description={tier.description}
              key={tier.title}
              price={tier.price}
              title={tier.title}
              subTitle={tier.subTitle}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
