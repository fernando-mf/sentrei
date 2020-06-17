import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import Router from "next/router";
import React from "react";

import Props from "@sentrei/common/types/components/ListMenu";

export default function ListMenu({
  anchorEl,
  open,
  onClose,
}: Props): JSX.Element {
  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id="list-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={(): Promise<boolean> => Router.push("/help")}>
        <ListItemIcon>
          <AccessibilityNewIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </MenuItem>
    </Menu>
  );
}
