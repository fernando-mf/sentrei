import CircularProgress from "@material-ui/core/CircularProgress";

import React from "react";

import LoaderStyles from "./LoaderStyles";

export default function Spacing(): JSX.Element {
  const classes = LoaderStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}
