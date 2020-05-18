import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const BannerStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      padding: theme.spacing(8, 0, 6),
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default BannerStyles;
