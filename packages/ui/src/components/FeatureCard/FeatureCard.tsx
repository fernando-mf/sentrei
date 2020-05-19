/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";

import FeatureStyles from "./FeatureCardStyles";

export default function FeatureCard(): JSX.Element {
  const classes = FeatureStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.item}>
          <Avatar className={classes.avatar} />
        </div>
        <Box m={1} />
        <Typography variant="h5" className={classes.title}>
          Unlimited Time
        </Typography>
        <Box m={1} />
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
      </CardContent>
    </Card>
  );
}
