import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    absolute: {
      position: "absolute",
      top: "auto",
    },
    appBar: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: theme.palette.common.white,
      width: "100%",
      backgroundColor: theme.palette.grey[100],
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",

      justifyContent: "flex-start",
      position: "relative",
    },
    appResponsive: {
      margin: "20px 10px",
      marginTop: "0px",
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
    fixed: {
      position: "fixed",
    },
    hidden: {
      width: "100%",
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    title: {
      letterSpacing: "unset",
      "&,& a": {
        minWidth: "unset",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        whiteSpace: "nowrap",
        color: "inherit",
        "&:hover,&:focus": {
          color: "inherit",
          background: "transparent",
        },
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
