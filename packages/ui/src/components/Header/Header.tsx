import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";

import classNames from "classnames";
import React from "react";
import Scrollspy from "react-scrollspy";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Header";
import Link from "@sentrei/ui/components/Link";
import Logo from "@sentrei/ui/components/Logo";

import HeaderStyles from "./HeaderStyles";

export default function Header({
  faqText,
  featuresText,
  logo,
  pricingText,
  productText,
  loginText,
  signupText,
  sign = true,
  spy = true,
  testimonialText,
}: Props): JSX.Element {
  const classes = HeaderStyles();

  const mobileMenuId = "primary-search-account-menu-mobile";

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language?: string): void => {
    if (language) {
      i18n.changeLanguage(language);
    }
    setAnchorEl(null);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <MenuItem onClick={(): void => handleClose("en")}>English</MenuItem>
      <MenuItem onClick={(): void => handleClose("ja")}>日本語</MenuItem>
      <MenuItem onClick={(): void => handleClose("zh")}>中文</MenuItem>
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
            <Logo logo={logo} />
            <div className={classes.spy}>
              <Grid item>
                <Hidden smDown implementation="css">
                  {spy && (
                    <Scrollspy
                      items={[
                        "product",
                        "feature",
                        "testimonial",
                        "pricing",
                        "faq",
                      ]}
                      currentClassName="scroll-active-button"
                    >
                      <Button href="#product" className={classes.button}>
                        <Typography>{productText}</Typography>
                      </Button>
                      <Button href="#feature" className={classes.button}>
                        <Typography>{featuresText}</Typography>
                      </Button>
                      <Button href="#testimonial" className={classes.button}>
                        <Typography>{testimonialText}</Typography>
                      </Button>
                      <Button href="#pricing" className={classes.button}>
                        <Typography>{pricingText}</Typography>
                      </Button>
                      <Button href="#faq" className={classes.button}>
                        <Typography>{faqText}</Typography>
                      </Button>
                    </Scrollspy>
                  )}
                </Hidden>
              </Grid>
            </div>
            <div className={classes.sectionDesktop}>
              <Grid item>
                {sign && (
                  <>
                    <Link href="/login">
                      <Button
                        color="primary"
                        variant="outlined"
                        className={classes.margin}
                      >
                        <Typography>{loginText}</Typography>
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.margin}
                      >
                        <Typography>{signupText}</Typography>
                      </Button>
                    </Link>
                  </>
                )}
                <IconButton
                  edge="end"
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <LanguageIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={(): void => handleClose()}
                >
                  <MenuItem onClick={(): void => handleClose("en")}>
                    English
                  </MenuItem>
                  <MenuItem onClick={(): void => handleClose("ja")}>
                    日本語
                  </MenuItem>
                  <MenuItem onClick={(): void => handleClose("zh")}>
                    中文
                  </MenuItem>
                </Menu>
              </Grid>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="end"
                aria-controls={mobileMenuId}
                aria-label="menu"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>{renderMobileMenu}</div>
      <Toolbar />
    </div>
  );
}
