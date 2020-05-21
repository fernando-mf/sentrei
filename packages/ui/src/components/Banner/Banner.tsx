/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Typical from "react-typical";
import styled from "styled-components";

import Link from "@sentrei/ui/components/Link";

import BannerStyles from "./BannerStyles";

const LogoImg = styled.img`
  margin-right: 1em;
`;

export default function Banner(props: any): JSX.Element {
  const classes = BannerStyles();
  const {
    bannerBottom,
    bannerText,
    bannerTop,
    googleText,
    startText,
    typicalOne,
    typicalTwo,
    typicalThree,
  } = props;
  const typicalDuration = 3000;

  return (
    <Container maxWidth="sm" component="main" className={classes.banner}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {bannerTop}
        <br />
        <Typical
          steps={[
            typicalOne,
            typicalDuration,
            typicalTwo,
            typicalDuration,
            typicalThree,
            typicalDuration,
          ]}
          loop={Infinity}
          wrapper="span"
          className={classes.typical}
        />
        <br />
        {bannerBottom}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
        className={classes.text}
      >
        {bannerText}
      </Typography>
      <Box pt={3}>
        <Grid container justify="center" direction="row" spacing={1}>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <Link href="/signin">
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  <Typography noWrap>{startText}</Typography>
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.button}
              >
                <LogoImg
                  width="20px"
                  alt="Google sign-in"
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                />
                <Typography>{googleText}</Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

Banner.propTypes = {
  bannerBottom: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired,
  bannerTop: PropTypes.string.isRequired,
  googleText: PropTypes.string.isRequired,
  startText: PropTypes.string.isRequired,
  typicalOne: PropTypes.string.isRequired,
  typicalTwo: PropTypes.string.isRequired,
  typicalThree: PropTypes.string.isRequired,
};
