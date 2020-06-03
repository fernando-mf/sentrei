import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import Router from "next/router";
import React from "react";

import Props from "@sentrei/common/interfaces/ProfileMenu";
import {auth} from "@sentrei/common/utils/firebase";

export default function ProfileMenu({
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
      id="profile-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={(): Promise<boolean> => Router.push("/billing")}>
        <ListItemIcon>
          <AccountBalanceIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </MenuItem>
      <MenuItem onClick={(): Promise<boolean> => Router.push("/profile")}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </MenuItem>
      <MenuItem onClick={(): Promise<boolean> => Router.push("/settings")}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={(): Promise<void> => auth.signOut()}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );
}
