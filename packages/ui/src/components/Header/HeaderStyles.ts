import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: "flex",
      border: "0",
      marginBottom: "20px",
      color: theme.palette.common.white,
      width: "100%",
      backgroundColor: theme.palette.grey[100],
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "fixed",
    },
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      minHeight: "50px",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap",
    },
    hidden: {
      width: "100%",
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    logo: {
      maxWidth: "180px",
      maxHeight: "180px",
      minWidth: "60px",
      minHeight: "60px",
    },
    menu: {
      flexBox: true,
      alignItems: "center",
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
