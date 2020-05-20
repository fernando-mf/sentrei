/* eslint-disable react/forbid-prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import PricingCardStyles from "./PricingCardStyles";

export default function PricingCard(props: any): JSX.Element {
  const {
    action,
    buttonText,
    buttonVariant,
    description,
    price,
    subTitle,
    title,
  } = props;
  const classes = PricingCardStyles();

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subTitle}
        titleTypographyProps={{align: "center"}}
        subheaderTypographyProps={{align: "center"}}
        action={action}
        className={classes.cardHeader}
      />
      <CardContent>
        <div className={classes.cardPricing}>
          <Typography component="h2" variant="h3" color="textPrimary">
            {price}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            /mo
          </Typography>
        </div>
        <ul>
          {description.map((line: string) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={buttonVariant} color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

PricingCard.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
