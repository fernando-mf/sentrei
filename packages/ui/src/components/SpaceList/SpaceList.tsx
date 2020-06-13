import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import {useRouter} from "next/router";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceList";
import Space from "@sentrei/common/models/Space";
import {listSpaces} from "@sentrei/common/services/spaces";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Link from "@sentrei/ui/components/Link";
import Snackbar from "@sentrei/ui/components/Snackbar";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

import SpaceListStyles from "./SpaceListStyles";

export default function SpaceList({
  allowLoadMore,
  limit = 10,
  userId,
}: Props): JSX.Element {
  const classes = SpaceListStyles();
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

  if (items.length !== 0) {
    push("/[id]", `/${items[0].id}`);
  }

  if (items.length === 0 && loading === false) {
    return (
      <Container maxWidth="md" component="main">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          direction="row"
          justify="center"
          spacing={3}
          style={{minHeight: "100vh"}}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              component="h5"
            >
              You have no spaces...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={3}>
              <Link href="/create">
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="medium"
                  startIcon={<AddIcon />}
                >
                  Create One
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <div>
      <Snackbar action={snackbar} />
    </div>
  );
}
