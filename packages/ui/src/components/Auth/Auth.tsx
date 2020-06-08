/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import "@sentrei/common/utils/sentry";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import {useRouter} from "next/router";

import React from "react";
import "firebase/auth";
import {useForm, Controller} from "react-hook-form";

import * as Yup from "yup";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import signin from "@sentrei/common/services/signin";
import signinWithGoogle from "@sentrei/common/services/signinWithGoogle";
import signup from "@sentrei/common/services/signup";
import authType from "@sentrei/common/types/authType";
import {auth} from "@sentrei/common/utils/firebase";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Link from "@sentrei/ui/components/Link";
import Snackbar from "@sentrei/ui/components/Snackbar";

import AuthStyles from "./AuthStyles";

interface Props {
  type: authType;
}

export default function Auth({type}: Props): JSX.Element {
  const classes = AuthStyles();
  const AuthFormSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string().required("Please enter a valid password"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match",
    ),
  });

  const ResetFormSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });

  const {control, register, errors, handleSubmit} = useForm({
    reValidateMode: "onBlur",
    validationSchema: authType.reset ? ResetFormSchema : AuthFormSchema,
  });

  const {push, query} = useRouter();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  const redirect = (): void => {
    if (query.redirect) {
      push(String(query.redirect));
    }
  };

  const google = (): void => {
    signinWithGoogle().then(redirect);
  };

  const handleError = (err: Error): void => {
    setSnackbar({msg: err.message, type: "error"});
  };

  const handleFirebaseError = (err: firebase.FirebaseError): void => {
    setSnackbar(firebaseError(err, "login"));
  };

  const handleSuccess = (msg: string): void => {
    setSnackbar({msg, type: "success"});
  };

  const onSubmit = async (data: any): Promise<void> => {
    switch (type) {
      case authType.reset:
        try {
          await auth.sendPasswordResetEmail(data.email);
          handleSuccess("Please check your email");
        } catch (err) {
          handleError(err);
        }
        break;
      case authType.login:
        try {
          signin(data.email, data.password)
            .then(() => {
              if (query.redirect) {
                push(String(query.redirect));
              }
            })
            .catch(err => {
              handleFirebaseError(err);
            });
        } catch (err) {
          handleError(err);
        }
        break;
      case authType.signup:
        try {
          signup(data.email, data.password)
            .then(() => {
              if (query.redirect) {
                push(String(query.redirect));
              }
            })
            .catch(err => {
              handleFirebaseError(err);
            });
        } catch (err) {
          handleError(err);
        }
        break;
      default:
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar action={snackbar} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {type === authType.reset && <MailOutlinedIcon />}
          {type === authType.login && <LockOutlinedIcon />}
          {type === authType.signup && <AccountCircleOutlinedIcon />}
        </Avatar>
        <Typography component="h1" variant="h3">
          {type === authType.reset && "Reset email"}
          {type === authType.login && "Log in"}
          {type === authType.signup && "Sign up"}
        </Typography>
        {type !== authType.reset && (
          <>
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
              <Typography>Login with Google</Typography>
            </Button>
            <Box pt={5} />
            <Divider flexItem className={classes.divider} />
            <Box pb={3} />
          </>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          autoComplete="off"
          noValidate
        >
          <Controller
            as={
              <TextField
                autoComplete="email"
                autoFocus
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                name="email"
                placeholder="example@sentrei.com"
                required
                variant="outlined"
                error={!!errors.email}
                inputRef={register}
                helperText={errors.email ? errors.email.message : ""}
              />
            }
            name="email"
            control={control}
            defaultValue=""
          />
          {type === authType.login || type === authType.signup ? (
            <Controller
              as={
                <TextField
                  autoComplete="current-password"
                  fullWidth
                  id="password"
                  label="Password"
                  margin="normal"
                  name="password"
                  required
                  type="password"
                  variant="outlined"
                  error={!!errors.password}
                  inputRef={register}
                  helperText={errors.password ? errors.password.message : ""}
                />
              }
              name="password"
              control={control}
              defaultValue=""
            />
          ) : null}
          {type === authType.login || type === authType.signup ? (
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
            {type === authType.reset && "Send reset email"}
            {type === authType.login && "Log in"}
            {type === authType.signup && "Sign up"}
          </Button>
        </form>
        {type === authType.login && (
          <Grid container>
            <Grid item xs>
              <Link href="/reset-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        )}
        {type === authType.signup && (
          <>
            <Grid container justify="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
            <Box p={3} />
            <Grid container justify="center">
              <Grid item>
                <Link href="/terms" variant="body2">
                  By signing up you agree to our Terms of Service
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </Container>
  );
}
