import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: "100%",
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      maxWidth: "180px",
      maxHeight: "180px",
      minWidth: "60px",
      minHeight: "60px",
    },
    margin: {
      margin: theme.spacing(1),
    },
    scroll: {
      active: {
        color: theme.palette.primary,
      },
    },
    spy: {
      display: "none",
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    primary: {
      backgroundColor: theme.palette.common.white,
    },
    sectionDesktop: {
      display: "none",
      padding: theme.spacing(1),
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: theme.palette.common.white,
    },
  }),
);

export default HeaderStyles;
