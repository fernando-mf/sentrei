import {createStyles, makeStyles} from "@material-ui/core/styles";

const TestimonialStyles = makeStyles(() =>
  createStyles({
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyItems: "space-between",
      justifyContent: "center",
    },
  }),
);

export default TestimonialStyles;
