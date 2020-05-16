import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
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
  }),
);

// const HeaderStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     appBar: {
//       transition: "all 150ms ease 0s",
//       width: "100%",
//     },
//     hidden: {
//       width: "100%",
//     },
//     primary: {
//       backgroundColor: theme.palette.common.white,
//     },
//     logo: {
//       height: 100,
//       width: 100,
//     },
//     menu: {
//       alignItems: "center",
//       flexBox: true,
//     },
//     root: {
//       flexGrow: 1,
//     },
//     toolbar: {
//       flexWrap: "wrap",
//     },
//     toolbarTitle: {
//       flexGrow: 1,
//     },
//     transparent: {
//       backgroundColor: "transparent !important",
//       boxShadow: "none",
//     },
//   }),
// );

export default HeaderStyles;
