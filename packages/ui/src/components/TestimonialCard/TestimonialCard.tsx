/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

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
          <Typography variant="h6">Game Changer</Typography>
        </div>
        <QuoteIcon color="disabled" />
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
