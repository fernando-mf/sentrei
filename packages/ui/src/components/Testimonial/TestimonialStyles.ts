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
    testimonial: {
      padding: theme.spacing(8, 0, 6),
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 55,
    },
    largeIcon: {
      width: 100,
      height: 100,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
    },
  }),
);

export default TestimonialStyles;
