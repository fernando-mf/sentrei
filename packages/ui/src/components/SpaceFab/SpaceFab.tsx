import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Space from "@sentrei/common/models/Space";
import {listSpaces} from "@sentrei/common/services/spaces";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Snackbar from "@sentrei/ui/components/Snackbar";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

import SpaceFabStyles from "./SpaceFabStyles";

interface SpaceListProps {
  allowLoadMore?: boolean;
  limit?: number;
  userId?: string;
}

export default function SpaceFab({
  allowLoadMore,
  limit = 10,
  userId,
}: SpaceListProps): JSX.Element {
  const classes = SpaceFabStyles();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);
  const {error, get, items, lastVisible, loading} = useLoadMore<Space.Snapshot>(
    limit,
  );

  const loadMore = (): void => {
    get({data: listSpaces(lastVisible, userId, limit)});
  };

  React.useEffect(() => {
    get({data: listSpaces(undefined, userId, limit)});
  }, [get, limit, userId]);

  React.useEffect(() => {
    if (error) {
      setSnackbar(firebaseError(error, "groups_list"));
    }
  }, [error]);

  // if (items.length === 0 && loading === false) {
  //   return <p>create</p>;
  // }

  return (
    <div>
      <div>
        <Snackbar action={snackbar} />
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          size="large"
          className={classes.space}
        >
          <HomeWorkIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
      <div>
        <Fab
          color="primary"
          size="large"
          aria-label="add"
          className={classes.add}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
