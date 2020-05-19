/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
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
    <Card variant="outlined">
      <CardHeader>
        <Avatar />
      </CardHeader>
      <CardContent>
        <QuoteIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography className={classes.actions}>The</Typography>
      </CardActions>
    </Card>
  );
}
