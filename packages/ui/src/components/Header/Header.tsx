/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Scrollspy from "react-scrollspy";
import styled from "styled-components";

import Link from "@sentrei/ui/components/Link";
import Theme from "@sentrei/ui/containers/Theme";

import HeaderStyles from "./HeaderStyles";

export default function Header(props: any): JSX.Element {
  const classes = HeaderStyles();
  const {logo} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.transparent]: true,
    [classes.primary]: false,
  });

  const headerColorChange = (): void => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 0) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.transparent);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.primary);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.transparent);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.primary);
    }
  };

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const CustomScrollspy = styled(Scrollspy)`
    .scroll-active-button {
      color: ${Theme.palette.primary.main};
    }
  `;

  // const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: "top", horizontal: "right"}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{vertical: "top", horizontal: "right"}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup(): void {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={appBarClasses}>
        <Toolbar>
          <Grid container alignItems="center" justify="center">
            <ButtonBase className={classes.logo}>
              <Link href="/">{logo}</Link>
              <Typography variant="h6" noWrap>
                Sentrei
              </Typography>
            </ButtonBase>
            <div className={classes.spy}>
              <Grid item>
                <Hidden smDown implementation="css">
                  <CustomScrollspy
                    items={["section-1", "section-2", "section-3"]}
                    className="menu"
                    currentClassName="scroll-active-button"
                  >
                    <Button href="#section-1" className={classes.button}>
                      <Typography>Section 1</Typography>
                    </Button>
                    <Button href="#section-2" className={classes.button}>
                      <Typography>Section 2</Typography>
                    </Button>
                    <Button href="#section-3" className={classes.button}>
                      <Typography>Section 3</Typography>
                    </Button>
                  </CustomScrollspy>
                </Hidden>
              </Grid>
            </div>
            <div className={classes.sectionDesktop}>
              <Grid item>
                {/* <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.margin}
                >
                  <Typography>Sign In</Typography>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.margin}
                >
                  <Typography>Sign Up for Free</Typography>
                </Button>
              </Grid>
            </div>
            <div className={classes.sectionMobile}>
              {/* <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton> */}
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Toolbar />
    </div>
  );
}

Header.propTypes = {
  logo: PropTypes.node.isRequired,
};
