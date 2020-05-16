import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      alignItems: "center",
      backgroundColor: theme.palette.grey[100],
      border: "0",
      color: theme.palette.common.white,
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      marginBottom: "20px",
      position: "fixed",
      transition: "all 150ms ease 0s",
      width: "100%",
    },
    container: {
      alignItems: "center",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      marginLeft: "auto",
      marginRight: "auto",
      minHeight: "50px",
      paddingLeft: "15px",
      paddingRight: "15px",
      width: "100%",
    },
    hidden: {
      width: "100%",
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    logo: {
      maxHeight: "180px",
      maxWidth: "180px",
      minHeight: "60px",
      minWidth: "60px",
    },
    menu: {
      alignItems: "center",
      flexBox: true,
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      color: theme.palette.common.white,
      paddingTop: "25px",
    },
  }),
);

export default HeaderStyles;
