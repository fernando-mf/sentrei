import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";

import {useTranslation} from "@sentrei/common/i18n";
import Props from "@sentrei/common/types/components/Feature";
import FeatureCard from "@sentrei/ui/components/FeatureCard";
import Section from "@sentrei/ui/components/Section";

import FeatureStyles from "./FeatureStyles";

export default function Feature({
  imgOne,
  imgTwo,
  imgThree,
}: Props): JSX.Element {
  const classes = FeatureStyles();
  const {t} = useTranslation();

  return (
    <>
      <Section title={t("feature.sectionTitle")} subTitle="" />
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
          className={classes.container}
        >
          <Grid item xs={12} sm={4}>
            <FeatureCard
              img={imgOne}
              title={t("feature.titleOne")}
              subTitle={t("feature.subTitleOne")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              img={imgTwo}
              title={t("feature.titleTwo")}
              subTitle={t("feature.subTitleTwo")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              img={imgThree}
              title={t("feature.titleThree")}
              subTitle={t("feature.subTitleThree")}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
