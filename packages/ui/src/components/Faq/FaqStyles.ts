import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FaqStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontWeight: theme.typography.fontWeightLight,
    },
    root: {
      width: "100%",
    },
  }),
);

export default FaqStyles;
