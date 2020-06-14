import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceScreen";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpacePanel from "@sentrei/ui/components/SpacePanel";

import SpaceScreenStyles from "./SpaceScreenStyles";

export default function SpaceScreen({space}: Props): JSX.Element {
  const classes = SpaceScreenStyles();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  return (
    <div>
      <Snackbar action={snackbar} />
      <SpacePanel space={space} />
    </div>
  );
}
