import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import React from "react";

import Space from "@sentrei/common/models/Space";

import Link from "@sentrei/ui/components/Link";

import SpaceCardStyles from "./SpaceCardStyles";

interface Props {
  space?: Space.Get;
}

export default function SpaceCard({space}: Props): JSX.Element {
  const classes = SpaceCardStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={space?.name}
      />
      <CardActionArea>
        <Link href="/[id]" as={`/${space?.id}`}>
          <CardMedia
            className={classes.media}
            image={space?.photo ?? "https://picsum.photos/200/300?grayscale"}
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {space?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
