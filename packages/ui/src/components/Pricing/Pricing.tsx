import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

import {useTranslation} from "@sentrei/common/i18n";
import PricingCard from "@sentrei/ui/components/PricingCard";
import Section from "@sentrei/ui/components/Section";

export default function Pricing(): JSX.Element {
  const {t} = useTranslation();

  return (
    <>
      <Section title={t("pricing.sectionTitle")} subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <PricingCard
              buttonVariant="outlined"
              buttonText={t("pricing.buttonTextOne")}
              description1={t("pricing.description1One")}
              description2={t("pricing.description2One")}
              description3={t("pricing.description3One")}
              price={t("pricing.priceOne")}
              priceMonth={t("pricing.priceMonth")}
              title={t("pricing.titleOne")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PricingCard
              buttonVariant="contained"
              buttonText={t("pricing.buttonTextTwo")}
              description1={t("pricing.description1Two")}
              description2={t("pricing.description2Two")}
              description3={t("pricing.description3Two")}
              price={t("pricing.priceTwo")}
              priceMonth={t("pricing.priceMonth")}
              title={t("pricing.titleTwo")}
              subTitle={t("pricing.subTitleTwo")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PricingCard
              buttonVariant="outlined"
              buttonText={t("pricing.buttonTextThree")}
              description1={t("pricing.description1Three")}
              description2={t("pricing.description2Three")}
              description3={t("pricing.description3Three")}
              price={t("pricing.priceThree")}
              priceMonth={t("pricing.priceMonth")}
              title={t("pricing.titleThree")}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
