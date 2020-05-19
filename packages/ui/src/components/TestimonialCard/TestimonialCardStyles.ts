import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const TestimonialStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      textAlign: "center",
    },
    header: {
      alignItems: "center",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
  }),
);

export default TestimonialStyles;
