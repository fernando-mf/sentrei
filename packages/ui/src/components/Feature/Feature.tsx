/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <IconButton>
              <AccessTime className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Time Tracking
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <IconButton>
              <Dashboard className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              New experiences
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <IconButton>
              <GroupWork className={classes.largeIcon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Exclusive rates
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
