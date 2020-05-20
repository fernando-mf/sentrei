/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import FeatureCardStyles from "./FeatureCardStyles";

export default function FeatureCard(props: any): JSX.Element {
  const classes = FeatureCardStyles();

  const {img, subTitle, title} = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.item}>
          <Avatar className={classes.avatar}>{img}</Avatar>
        </div>
        <Box m={1} />
        <Typography noWrap variant="h5">
          {title}
        </Typography>
        <Box m={1} />
        <Typography variant="body2" color="textSecondary" component="p">
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

FeatureCard.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
