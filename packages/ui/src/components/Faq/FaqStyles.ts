import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FaqStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    root: {
      width: "100%",
    },
  }),
);

export default FaqStyles;
