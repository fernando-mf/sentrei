import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceList";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpacePanel from "@sentrei/ui/components/SpacePanel";

import SpaceListStyles from "./SpaceListStyles";

export default function SpaceList({space}: Props): JSX.Element {
  const classes = SpaceListStyles();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  return (
    <div>
      <Snackbar action={snackbar} />
      <SpacePanel space={space} />
    </div>
  );
}
