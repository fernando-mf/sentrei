import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FeatureStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    card: {
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyItems: "space-between",
      justifyContent: "center",
    },
    title: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  }),
);

export default FeatureStyles;
