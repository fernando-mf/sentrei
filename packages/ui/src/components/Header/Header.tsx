/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Scrollspy from "react-scrollspy";

import Link from "@sentrei/ui/components/Link";

import HeaderStyles from "./HeaderStyles";

export default function Header(): JSX.Element {
  const classes = HeaderStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
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

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              </div>
              </
          </Container>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Toolbar />
    </div>
  );
}

// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Hidden from "@material-ui/core/Hidden";

// export default function Header(props: any): JSX.Element {
//   const classes = HeaderStyles();
//   const appBarClasses = classNames({
//     [classes.appBar]: true,
//     [classes.transparent]: true,
//     [classes.primary]: false,
//   });
//   const {logo} = props;

//   const headerColorChange = (): void => {
//     const windowsScrollTop = window.pageYOffset;
//     if (windowsScrollTop > 300) {
//       document.body
//         .getElementsByTagName("header")[0]
//         .classList.remove(classes.transparent);
//       document.body
//         .getElementsByTagName("header")[0]
//         .classList.add(classes.primary);
//     } else {
//       document.body
//         .getElementsByTagName("header")[0]
//         .classList.add(classes.transparent);
//       document.body
//         .getElementsByTagName("header")[0]
//         .classList.remove(classes.primary);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", headerColorChange);
//     return function cleanup(): void {
//       window.removeEventListener("scroll", headerColorChange);
//     };
//   });

//   return (
//     <div className={classes.root}>
//     <AppBar position="sticky" className={appBarClasses}>
//       <Container maxWidth="md">
//         <Toolbar className={classes.toolbar}>
//           <ButtonBase className={classes.toolbarTitle}>
//             <Link href="/" className={classes.logo}>
//               {logo}
//             </Link>
//           </ButtonBase>
//           <Hidden smDown implementation="css">
//             <Box mx="auto">
//               <Scrollspy
//                 items={["section-1", "section-2", "section-3"]}
//                 currentClassName="is-current"
//               >
//                 <Button href="#section-1">Section 1</Button>
//                 <Button href="#section-2">Section 2</Button>
//                 <Button href="#section-3">Section 3</Button>
//               </Scrollspy>
//             </Box>
//           </Hidden>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </div>
//   );
// }
