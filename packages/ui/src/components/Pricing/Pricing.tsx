import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

import PricingCard from "@sentrei/ui/components/PricingCard";
import Section from "@sentrei/ui/components/Section";

interface Props {
  sectionTitle: string;
  priceMonth: string;
  buttonTextOne: string;
  description1One: string;
  description2One: string;
  description3One: string;
  priceOne: string;
  titleOne: string;
  subTitleOne: string;
  buttonTextTwo: string;
  description1Two: string;
  description2Two: string;
  description3Two: string;
  priceTwo: string;
  titleTwo: string;
  subTitleTwo: string;
  buttonTextThree: string;
  description1Three: string;
  description2Three: string;
  description3Three: string;
  priceThree: string;
  titleThree: string;
  subTitleThree: string;
}

export default function Pricing({
  sectionTitle,
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
}: Props): JSX.Element {
  return (
    <>
      <Section title={sectionTitle} subTitle="" />
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
