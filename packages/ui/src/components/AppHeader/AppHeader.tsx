import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import React from "react";

import Props from "@sentrei/common/interfaces/AppHeader";
import Logo from "@sentrei/ui/components/Logo";
import ProfileMenu from "@sentrei/ui/components/ProfileMenu";

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
            {profileAnchorEl ? <CloseIcon /> : <PermIdentityIcon />}
          </IconButton>
          <ProfileMenu
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileClose}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
