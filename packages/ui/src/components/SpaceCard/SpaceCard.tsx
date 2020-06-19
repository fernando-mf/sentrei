import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";

import Props from "@sentrei/common/types/components/SpaceCard";
import Link from "@sentrei/ui/components/Link";
import MemberMenu from "@sentrei/ui/components/MemberMenu";

import SpaceCardStyles from "./SpaceCardStyles";

export default function SpaceCard({space, userId, img}: Props): JSX.Element {
  const classes = SpaceCardStyles();

  const [menuAnchorEl, menuSetAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>): void => {
    menuSetAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    menuSetAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href="/[id]" as={`/${space.id}`}>
          {space.photo ? (
            <CardMedia className={classes.media} image={space.photo} />
          ) : (
            <CardMedia className={classes.media}>{img}</CardMedia>
          )}
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {space.name}
        </Typography>
        <Box p={1} />
        <div className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <MemberMenu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleClose}
              collection="spaces"
              id={space.id}
              userId={userId}
            />
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
}
