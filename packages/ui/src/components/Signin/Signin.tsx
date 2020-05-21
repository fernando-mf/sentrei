/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import "@sentrei/common/utils/sentry";
// eslint-disable-next-line import/no-named-default
import {default as LinkButton} from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as Sentry from "@sentry/browser";
import firebase from "firebase/app";
import Router from "next/router";
import React from "react";

import "firebase/auth";
import Link from "@sentrei/ui/components/Link";

import SigninStyles from "./SigninStyles";

type Inputs = {
  email: string;
  password: string;
};

export default function Signin(): JSX.Element {
  const classes = SigninStyles();

  const initial: Inputs = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = React.useState(initial);

  const handleInputChange = (e: React.ChangeEvent<any>): void => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<any>): Promise<void> => {
    e.preventDefault();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(inputs.email, inputs.password);
      Router.push("/");
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const forgotPassword = (email: any): void => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      // .then(user => {
      //   alert("Please check your email...");
      // })
      .catch(error => {
        Sentry.captureException(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <LinkButton
                onClick={(): void => forgotPassword(inputs.email)}
                variant="body2"
              >
                Forgot password?
              </LinkButton>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
