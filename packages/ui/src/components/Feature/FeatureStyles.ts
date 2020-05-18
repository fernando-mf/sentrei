import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FeatureStyles = makeStyles((theme: Theme) =>
  createStyles({
    feature: {
      flexGrow: 1,
      padding: theme.spacing(9, 3, 6),
    },
    image: {
      height: 55,
    },
    largeIcon: {
      width: 100,
      height: 100,
    },
    paper: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  }),
);

export default FeatureStyles;
