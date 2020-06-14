import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const SpacePanelStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: "100vh",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

export default SpacePanelStyles;
