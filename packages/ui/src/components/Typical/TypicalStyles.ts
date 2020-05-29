import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const TypicalStyles = makeStyles((theme: Theme) =>
  createStyles({
    typical: {
      color: theme.palette.primary.main,
      placeContent: "center",
    },
  }),
);

export default TypicalStyles;
