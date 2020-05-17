/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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

  const CustomScrollspy = styled(Scrollspy)`
    .scroll-active-button {
      color: ${Theme.palette.primary.main};
    }
  `;

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
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

Header.propTypes = {
  logo: PropTypes.node.isRequired,
};
