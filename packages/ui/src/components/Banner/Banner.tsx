import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Typical from "react-typical";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Banner";
import signInWithGoogle from "@sentrei/common/utils/auth/signInWithGoogle";
import Link from "@sentrei/ui/components/Link";

import BannerStyles from "./BannerStyles";

export default function Banner({
  bannerBottom,
  bannerText,
  bannerTop,
  googleText,
  startText,
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  const classes = BannerStyles();
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
          key={i18n.language}
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
              onClick={(): void => signInWithGoogle()}
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
