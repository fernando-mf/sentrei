import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FeatureStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
);

export default FeatureStyles;
