import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import React from "react";

import SpaceFabStyles from "./SpaceFabStyles";

export default function SpaceFab(): JSX.Element {
  const classes = SpaceFabStyles();

  return (
    <div>
      <div>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          size="large"
          className={classes.fab}
        >
          <NavigationIcon className={classes.extendedIcon} />
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
