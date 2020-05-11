/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Close from "@material-ui/icons/Close";
import Menu from "@material-ui/icons/Menu";
import classNames from "classnames";
import React from "react";
import Scrollspy from "react-scrollspy";

import Link from "@sentrei/ui/components/Link";

import HeaderStyles from "./HeaderStyles";

export default function Header(): JSX.Element {
  const classes = HeaderStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.transparent]: true,
    [classes.primary]: false,
  });

  const headerColorChange = (): void => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 300) {
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

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup(): void {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Button className={classes.title}>
          <Link href="/">Sentrei</Link>
        </Button>
        <Grid container alignItems="center" justify="center">
          <Hidden smDown implementation="css">
            <Scrollspy
              items={["section-1", "section-2", "section-3"]}
              currentClassName="is-current"
            >
              <Button href="#section-1">Section 1</Button>
              <Button href="#section-2">Section 2</Button>
              <Button href="#section-3">Section 3</Button>
            </Scrollspy>
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="openDrawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="openDrawer"
            onClick={handleDrawerToggle}
          >
            <Close />
          </IconButton>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
