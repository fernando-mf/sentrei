import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";

import Props from "@sentrei/common/interfaces/AppHeader";
import handleLogout from "@sentrei/common/utils/auth/handleLogout";
import Logo from "@sentrei/ui/components/Logo";

import AppHeaderStyles from "./AppHeaderStyles";

export default function AppHeader({logo}: Props): JSX.Element {
  const classes = AppHeaderStyles();
  const [
    sentreiAnchorEl,
    setSentreiAnchorEl,
  ] = React.useState<null | HTMLElement>(null);
  const [
    profileAnchorEl,
    setProfileAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isSentreiMenuOpen = Boolean(sentreiAnchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  const handleSentreiMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSentreiAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setSentreiAnchorEl(null);
    setProfileAnchorEl(null);
  };

  const sentreiMenuId = "primary-search-sentrei-menu";
  const renderSentreiMenu = (
    <Menu
      anchorEl={sentreiAnchorEl}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      id={sentreiMenuId}
      keepMounted
      transformOrigin={{vertical: "top", horizontal: "right"}}
      open={isSentreiMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
    </Menu>
  );

  const profileMenuId = "primary-search-profile-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      id={profileMenuId}
      keepMounted
      transformOrigin={{vertical: "top", horizontal: "right"}}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        {renderSentreiMenu}
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="sentrei-menu"
            aria-haspopup="true"
            aria-controls={sentreiMenuId}
            className={classes.left}
            onClick={handleSentreiMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" justify="center">
            <Logo logo={logo} />
          </Grid>
          <IconButton
            edge="end"
            aria-label="profile-menu"
            aria-haspopup="true"
            aria-controls={profileMenuId}
            className={classes.right}
            onClick={handleProfileMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderProfileMenu}
      <Toolbar />
    </div>
  );
}
