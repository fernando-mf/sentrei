import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const FaqStyles = makeStyles((theme: Theme) =>
  createStyles({
    faq: {
      padding: theme.spacing(8, 0, 6),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    root: {
      width: "100%",
    },
    title: {
      margin: theme.spacing(0, 0, 3),
    },
  }),
);

export default FaqStyles;
