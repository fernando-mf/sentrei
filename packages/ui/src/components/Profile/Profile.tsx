/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

import Section from "@sentrei/ui/components/Section";

import ProfileStyles from "./ProfileStyles";

export default function Profile(props: any): JSX.Element {
  const classes = ProfileStyles();
  const {auth, t} = props;
  const {user} = auth;

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.profile}>
        <Section title="Profile" subTitle="" />
        <Typography gutterBottom>
          <span>Display Name:</span> {user.displayName}
        </Typography>
        <Typography gutterBottom>
          <span>Email:</span> {user.email}
        </Typography>
        <Typography gutterBottom>
          <span>Email Verification Status:</span>{" "}
          {user.emailVerified === true ? "Verified" : "Not Verified"}
        </Typography>
        <Typography gutterBottom>
          <span>User ID:</span> {user.uid}
        </Typography>
        <Typography gutterBottom>
          <span>Last Login:</span> {user.metadata.lastSignInTime}
        </Typography>
        <Typography gutterBottom>
          <span>Date Joined:</span> {user.metadata.creationTime}
        </Typography>
      </Container>
    </>
  );
}
