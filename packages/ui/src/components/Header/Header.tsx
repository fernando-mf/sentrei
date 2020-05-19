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

import Link from "@sentrei/ui/components/Link";

import HeaderStyles from "./HeaderStyles";

export default function Header(props: any): JSX.Element {
  const classes = HeaderStyles();
  const {
    faqText,
    featuresText,
    logo,
    pricingText,
    productText,
    signInText,
    signUpText,
    spy,
    testimonialText,
  } = props;

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
                  {spy ? (
                    <Scrollspy
                      items={[
                        "product",
                        "feature",
                        "testimonial",
                        "pricing",
                        "faq",
                      ]}
                      className="menu"
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
                  ) : (
                    <Button />
                  )}
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
                  <Typography>{signInText}</Typography>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.margin}
                >
                  <Typography>{signUpText}</Typography>
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

Header.defaultProps = {
  spy: false,
};

Header.propTypes = {
  faqText: PropTypes.string.isRequired,
  featuresText: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  pricingText: PropTypes.string.isRequired,
  productText: PropTypes.string.isRequired,
  signInText: PropTypes.string.isRequired,
  signUpText: PropTypes.string.isRequired,
  spy: PropTypes.bool,
  testimonialText: PropTypes.string.isRequired,
};
