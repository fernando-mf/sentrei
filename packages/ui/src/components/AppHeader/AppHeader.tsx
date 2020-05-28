import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu, {MenuProps} from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuIcon from "@material-ui/icons/Menu";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import React from "react";

import Props from "@sentrei/common/interfaces/AppHeader";
import Logo from "@sentrei/ui/components/Logo";

import AppHeaderStyles from "./AppHeaderStyles";

export default function AppHeader({logo}: Props): JSX.Element {
  const classes = AppHeaderStyles();
  const [
    profileAnchorEl,
    profileSetAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    profileSetAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    profileSetAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            className={classes.left}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" justify="center">
            <Logo logo={logo} />
          </Grid>
          <IconButton
            edge="end"
            aria-label="customized-menu"
            aria-haspopup="true"
            onClick={handleProfileClick}
            className={classes.right}
          >
            <AccountCircleIcon />
          </IconButton>
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
            id="customized-menu"
            anchorEl={profileAnchorEl}
            keepMounted
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <InboxIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
