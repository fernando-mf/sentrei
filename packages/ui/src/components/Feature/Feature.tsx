/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
import AccessTime from "@material-ui/icons/AccessTime";
import Dashboard from "@material-ui/icons/Dashboard";
import GroupWork from "@material-ui/icons/GroupWork";

import React from "react";

import FeatureStyles from "./FeatureStyles";

export default function Feature(): JSX.Element {
  const classes = FeatureStyles();
  return (
    <Container maxWidth="lg" component="main" className={classes.feature}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <IconButton>
              <AccessTime fontSize="large" className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Time Tracking
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <IconButton>
              <Dashboard className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              New experiences
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <IconButton>
              <GroupWork className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Exclusive rates
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
