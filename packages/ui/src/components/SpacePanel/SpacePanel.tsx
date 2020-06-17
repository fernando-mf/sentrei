import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import Member from "@sentrei/common/models/Member";
import {getMembers} from "@sentrei/common/services/members";
import Props from "@sentrei/common/types/components/SpacePanel";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

import SpacePanelStyles from "./SpacePanelStyles";

export default function SpacePanel({space, limit = 30}: Props): JSX.Element {
  const classes = SpacePanelStyles();
  const {get, items, loading} = useLoadMore<Member.Snapshot>(limit);

  React.useEffect(() => {
    get({
      data: getMembers("spaces", space.id, undefined, limit),
      replace: true,
    });
  }, [get, limit]);

  return (
    <Container maxWidth="md" component="main">
      <Grid
        container
        alignItems="center"
        alignContent="center"
        direction="column"
        justify="center"
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={12} sm={6}>
          <Avatar
            alt="Space"
            src={space.photo || undefined}
            className={classes.large}
          />
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            component="h5"
          >
            {space.id}
          </Typography>
          <Typography>Members</Typography>
          {loading && (
            <Skeleton>
              <AvatarGroup max={3}>
                <Avatar />
                <Avatar />
                <Avatar />
              </AvatarGroup>
            </Skeleton>
          )}
          <AvatarGroup max={3}>
            {items.map(member => (
              <Avatar key={member.username} src={member.photo || undefined} />
            ))}
          </AvatarGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
