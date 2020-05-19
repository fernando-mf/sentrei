import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const TestimonialStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      overflow: "hidden",
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      alignItems: "center",
      display: "flex",
      position: "relative",
    },
  }),
);

export default TestimonialStyles;
