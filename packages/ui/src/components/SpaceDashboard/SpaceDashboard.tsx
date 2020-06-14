import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useRouter} from "next/router";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceDashboard";
import Space from "@sentrei/common/models/Space";
import {listSpaces} from "@sentrei/common/services/spaces";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpaceCard from "@sentrei/ui/components/SpaceCard";
import SpaceNone from "@sentrei/ui/components/SpaceNone";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

import SpaceDashboardStyles from "./SpaceDashboardStyles";

export default function SpaceDashboard({
  limit = 10,
  userId,
}: Props): JSX.Element {
  const classes = SpaceDashboardStyles();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);
  const {error, get, items, loading} = useLoadMore<Space.Snapshot>(limit);

  const {push} = useRouter();

  React.useEffect(() => {
    get({data: listSpaces(undefined, userId, limit)});
  }, [get, limit, userId]);

  React.useEffect(() => {
    if (error) {
      setSnackbar(firebaseError(error, "spaces_list"));
    }
  }, [error]);

  if (items.length === 0 && loading === false) {
    return <SpaceNone />;
  }

  return (
    <div>
      <Snackbar action={snackbar} />
      <Box p={1}>
        <Typography
          variant="h3"
          align="center"
          color="textSecondary"
          component="h4"
        >
          Your spaces
        </Typography>
      </Box>
      <Container maxWidth="lg" component="main">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          direction="row"
          justify="center"
          spacing={1}
          className={classes.grid}
        >
          {loading && (
            <>
              <Grid item xs={12} sm={4}>
                <SpaceCard loading={loading} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SpaceCard loading={loading} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SpaceCard loading={loading} />
              </Grid>
            </>
          )}
          {items.map(space => (
            <Grid item key={space.id} xs={12} sm={4}>
              <SpaceCard space={space} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
