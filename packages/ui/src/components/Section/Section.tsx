import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import Props from "@sentrei/common/types/components/Section";
import RoughNotation from "@sentrei/ui/components/RoughNotation";

import SectionStyles from "./SectionStyles";

export default function Section({subTitle, title}: Props): JSX.Element {
  const classes = SectionStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.section}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        <RoughNotation color="primary" text={title} type="underline" />
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        {subTitle}
      </Typography>
    </Container>
  );
}
