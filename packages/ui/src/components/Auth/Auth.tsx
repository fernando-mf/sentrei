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
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import firebase from "firebase/app";
import Router from "next/router";
import React from "react";

import "firebase/auth";
import authType from "@sentrei/common/types/authType";
import Link from "@sentrei/ui/components/Link";
import Snackbar from "@sentrei/ui/components/Snackbar";

import AuthStyles from "./AuthStyles";

type Inputs = {
  email: string;
  password: string;
};

interface Props {
  type: authType;
}

export default function Auth({type}: Props): JSX.Element {
  const classes = AuthStyles();

  const initial: Inputs = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = React.useState(initial);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<
    "error" | "success" | "info" | "warning"
  >("info");

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
    } catch (err) {
      console.log(err);
    }
  };

  const forgotPassword = (email: any): void => {
    firebase.auth().sendPasswordResetEmail(email);
    setSeverity("success");
    setMessage("");
    setOpen(true);
    // .catch(err => {
    //   handleError(err);
    // });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
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
          {type === authType.signin ? (
            <Grid container>
              <Grid item xs>
                <Link href="/reset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          ) : null}
        </form>
      </div>
    </Container>
  );
}
