import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FeatureStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      backgroundColor: theme.palette.common.white,
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
  }),
);

export default FeatureStyles;
