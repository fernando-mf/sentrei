import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FeatureStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      display: "flex",
      position: "relative",
    },
    feature: {
      padding: theme.spacing(8, 0, 6),
    },
    image: {
      height: 55,
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    largeIcon: {
      width: 100,
      height: 100,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  }),
);

export default FeatureStyles;
