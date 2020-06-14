import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";

import React from "react";

import Space from "@sentrei/common/models/Space";

import Link from "@sentrei/ui/components/Link";

import SpaceCardStyles from "./SpaceCardStyles";

interface Props {
  space?: Space.Get;
  loading?: boolean;
}

export default function SpaceCard({loading, space}: Props): JSX.Element {
  const classes = SpaceCardStyles();

  return (
    <Link href="/[id]" as={`/${space?.id}`}>
      <Card className={classes.card}>
        <CardHeader
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{marginBottom: 6}}
              />
            ) : (
              space?.name
            )
          }
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image={space?.photo ?? "https://picsum.photos/200/300?grayscale"}
          />
        )}
        <CardContent>
          {loading ? (
            <>
              <Skeleton
                animation="wave"
                height={10}
                style={{marginBottom: 6}}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              {space?.description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
