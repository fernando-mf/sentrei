import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import React from "react";

import Copyright from "@sentrei/ui/components/Copyright";

import FooterStyles from "./FooterStyles";

export default function Footer(): JSX.Element {
  const classes = FooterStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly" />
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}
