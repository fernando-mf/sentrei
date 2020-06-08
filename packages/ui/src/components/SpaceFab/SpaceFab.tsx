import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import React from "react";

import {listSpaces} from "@sentrei/common/services/spaces";

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

  return (
    <div>
      <div>
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
