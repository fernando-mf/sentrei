import {createStyles, makeStyles} from "@material-ui/core/styles";

const ScreenPanelStyles = makeStyles(() =>
  createStyles({
    tilt: {
      filter: "drop-shadow(0 3px 3px gray)",
    },
  }),
);

export default ScreenPanelStyles;
