import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Error from "next/error";
import React from "react";

import Props from "@sentrei/common/interfaces/SpacePanel";
import Member from "@sentrei/common/models/Member";
import Space from "@sentrei/common/models/Space";
import {getMembers} from "@sentrei/common/services/members";
import Link from "@sentrei/ui/components/Link";
import Loader from "@sentrei/ui/components/Loader";
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
          {loading && <CircularProgress />}
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
