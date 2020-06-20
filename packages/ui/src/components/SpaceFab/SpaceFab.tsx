/* eslint-disable @typescript-eslint/no-unused-vars */

import CreateIcon from "@material-ui/icons/Create";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import Router from "next/router";
import React from "react";

import SpaceFabStyles from "./SpaceFabStyles";

export default function SpaceFab(): JSX.Element {
  const classes = SpaceFabStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleCreate = (): void => {
    Router.push("/create");
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speed}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          key="create"
          icon={<CreateIcon />}
          tooltipTitle="Create"
          tooltipOpen
          onClick={handleCreate}
        />
      </SpeedDial>
    </div>
  );
}
