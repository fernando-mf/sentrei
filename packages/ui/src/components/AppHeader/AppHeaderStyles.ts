import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const AppHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: theme.palette.common.white,
      width: "100%",
    },
    left: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
    right: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
  }),
);

export default AppHeaderStyles;
