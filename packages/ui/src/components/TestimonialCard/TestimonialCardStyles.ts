import {createStyles, makeStyles} from "@material-ui/core/styles";

const TestimonialStyles = makeStyles(() =>
  createStyles({
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
);

export default TestimonialStyles;
