/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import QuoteIcon from "@material-ui/icons/FormatQuote";

import React from "react";

import TestimonialCardStyles from "./TestimonialCardStyles";

export default function TestimonialCard(): JSX.Element {
  const classes = TestimonialCardStyles();
  return (
    <Card variant="outlined" elevation={0}>
      <CardContent>
        <div className={classes.item}>
          <Avatar />
          <Box m={1} />
          <Typography variant="h5">Game Changer</Typography>
        </div>
        <QuoteIcon color="primary" />
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
        <div className={classes.item}>
          <Typography variant="h6">Bob Dylan</Typography>
          <Box m={1} />
          <Typography variant="subtitle2" color="textSecondary">
            CEO
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}