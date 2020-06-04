import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useRouter} from "next/router";
import React from "react";

import Props from "@sentrei/common/interfaces/Banner";
import signinWithGoogle from "@sentrei/common/services/signinWithGoogle";
import Link from "@sentrei/ui/components/Link";
import RoughNotation from "@sentrei/ui/components/RoughNotation";
import Typical from "@sentrei/ui/components/Typical";

import BannerStyles from "./BannerStyles";

export default function Banner({
  bannerBottom,
  bannerBottomRough,
  bannerTextOne,
  bannerTextTwo,
  bannerTextThree,
  bannerTextRough,
  bannerTop,
  googleText,
  startText,
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  const classes = BannerStyles();
  const {push, query} = useRouter();

  const redirect = (): void => {
    if (query.redirect) {
      push(String(query.redirect));
    }
  };

  const google = (): void => {
    signinWithGoogle().then(redirect);
  };

  return (
    <Container maxWidth="sm" component="main" className={classes.banner}>
      <Typography component="h1" variant="h2" align="center">
        {bannerTop}
        <br />
        <Typical
          typicalOne={typicalOne}
          typicalTwo={typicalTwo}
          typicalThree={typicalThree}
        />
        <br />
        {bannerBottom}
        <RoughNotation
          initial
          color="primary"
          text={bannerBottomRough}
          type="underline"
        />
      </Typography>
      <Box p={1} />
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        className={classes.text}
      >
        {bannerTextOne}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        className={classes.text}
      >
        {bannerTextTwo}
        <RoughNotation
          animationDelay={1000}
          animationDuration={3000}
          color="secondary"
          text={bannerTextRough}
          type="highlight"
        />
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
        noWrap
        className={classes.text}
      >
        {bannerTextThree}
      </Typography>
      <Box pt={3} />
      <Grid container justify="center" direction="row" spacing={1}>
        <Grid item xs={12} md={6}>
          <Link href="/signup" className={classes.item}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              <Typography noWrap>{startText}</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.item}>
            <Button
              onClick={(): void => google()}
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              <img
                width="20px"
                alt="Google sign-in"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                style={{marginRight: "1em"}}
              />
              <Typography>{googleText}</Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
