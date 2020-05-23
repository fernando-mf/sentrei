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
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
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
    setMessage("");
    setSeverity("info");
    setOpen(false);
    switch (type) {
      case authType.reset:
        try {
          firebase.auth().sendPasswordResetEmail(inputs.email);
          setMessage("Please check your email");
          setSeverity("success");
          setOpen(true);
        } catch (err) {
          setMessage(err);
          setSeverity("error");
          setOpen(true);
        }
        break;
      case authType.signin:
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(inputs.email, inputs.password);
          setOpen(false);
          Router.push("/");
        } catch (err) {
          setMessage(err);
          setSeverity("error");
          setOpen(true);
        }
        break;
      case authType.signup:
        try {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(inputs.email, inputs.password);
          setOpen(false);
          Router.push("/");
        } catch (err) {
          setMessage(err);
          setSeverity("error");
          setOpen(true);
        }
        break;
      default:
    }
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
          {type === authType.reset ? <MailOutlinedIcon /> : null}
          {type === authType.signin ? <LockOutlinedIcon /> : null}
          {type === authType.signup ? <LockOutlinedIcon /> : null}
        </Avatar>
        <Typography component="h1" variant="h3">
          {type === authType.reset ? "Reset email" : null}
          {type === authType.signin ? "Sign in" : null}
          {type === authType.signup ? "Sign up" : null}
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
          {type === authType.signin || type === authType.signup ? (
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
          ) : null}
          {type === authType.signin || type === authType.signup ? (
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {type === authType.reset ? "Send reset email" : null}
            {type === authType.signin ? "Sign in" : null}
            {type === authType.signup ? "Sign up" : null}
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
          {type === authType.signup ? (
            <Grid container justify="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          ) : null}
        </form>
      </div>
    </Container>
  );
}
