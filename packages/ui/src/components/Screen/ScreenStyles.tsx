import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const ScreenStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default ScreenStyles;
