import {useRouter} from "next/router";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceList";
import Space from "@sentrei/common/models/Space";
import {listSpaces} from "@sentrei/common/services/spaces";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpaceNone from "@sentrei/ui/components/SpaceNone";
import SpacePanel from "@sentrei/ui/components/SpacePanel";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

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
