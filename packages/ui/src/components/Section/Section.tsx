/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import SectionStyles from "./SectionStyles";

export default function Section(props: any): JSX.Element {
  const classes = SectionStyles();
  const {subTitle, title} = props;
  return (
    <Container maxWidth="sm" component="main" className={classes.section}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
