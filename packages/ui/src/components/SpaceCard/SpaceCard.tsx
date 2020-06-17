import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import React from "react";

import Props from "@sentrei/common/types/components/SpaceCard";
import Link from "@sentrei/ui/components/Link";
import MemberMenu from "@sentrei/ui/components/MemberMenu";

import SpaceCardStyles from "./SpaceCardStyles";

export default function SpaceCard({space, userId}: Props): JSX.Element {
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
    <Card>
      <CardHeader
        action={
          <>
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
          </>
        }
        title={space.name}
      />
      <CardActionArea>
        <Link href="/[id]" as={`/${space.id}`}>
          <CardMedia
            className={classes.media}
            image={space.photo ?? "https://picsum.photos/200/300?grayscale"}
          />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {space.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
