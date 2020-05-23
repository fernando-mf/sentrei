import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import SectionStyles from "./SectionStyles";

interface Props {
  subTitle: string;
  title: string;
}
export default function Section({subTitle, title}: Props): JSX.Element {
  const classes = SectionStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.section}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.title}
        gutterBottom
      >
        {title}
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
