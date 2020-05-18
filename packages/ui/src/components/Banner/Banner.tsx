/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

import BannerStyles from "./BannerStyles";

const LogoImg = styled.img`
  margin-right: 1em;
`;

export default function Banner(): JSX.Element {
  const classes = BannerStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.banner}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Where remote software teams do their best work
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
      >
        Quickly build an effective pricing table for your potential customers
        with this layout. It&apos;s built with default Material-UI components
        with little customization.
      </Typography>
      <Grid container justify="center" direction="row" spacing={1}>
        <Grid item xs={12} md={6}>
          <div className={classes.item}>
            <Button
              color="primary"
              variant="contained"
              className={classes.margin}
            >
              <Typography noWrap>Get Started -free forever-</Typography>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.item}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.margin}
            >
              <LogoImg
                width="20px"
                alt="Google sign-in"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              />
              <Typography>Sign up with Google </Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
