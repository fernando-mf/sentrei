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
    },
    margin: {
      margin: theme.spacing(1),
    },
    typical: {
      color: theme.palette.primary.main,
    },
  }),
);

export default BannerStyles;
