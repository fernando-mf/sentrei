import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import React from "react";

import {useTranslation} from "@sentrei/common/i18n";
import Props from "@sentrei/common/types/components/Testimonial";
import Section from "@sentrei/ui/components/Section";
import TestimonialCard from "@sentrei/ui/components/TestimonialCard";

export default function Testimonial({
  imgOne,
  imgTwo,
  imgThree,
}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <>
      <Section title={t("testimonial.sectionTitle")} subTitle="" />
      <Container maxWidth="lg" component="main">
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              img={imgOne}
              author={t("testimonial.authorOne")}
              body={t("testimonial.bodyOne")}
              occupation={t("testimonial.occupationOne")}
              title={t("testimonial.titleOne")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              img={imgTwo}
              author={t("testimonial.authorTwo")}
              body={t("testimonial.bodyTwo")}
              occupation={t("testimonial.occupationTwo")}
              title={t("testimonial.titleTwo")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TestimonialCard
              img={imgThree}
              author={t("testimonial.authorThree")}
              body={t("testimonial.bodyThree")}
              occupation={t("testimonial.occupationThree")}
              title={t("testimonial.titleThree")}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
