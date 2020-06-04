import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const BannerStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      padding: theme.spacing(12, 0, 0),
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
      width: "100%",
    },
    text: {
      whiteSpace: "pre-line",
    },
  }),
);

export default BannerStyles;
