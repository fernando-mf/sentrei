import {createStyles, Theme, makeStyles} from "@material-ui/core/styles";

const SpaceFabStyles = makeStyles((theme: Theme) =>
  createStyles({
    add: {
      top: "auto",
      bottom: theme.spacing(7),
      right: theme.spacing(7),
      position: "fixed",
      [theme.breakpoints.down("md")]: {
        bottom: theme.spacing(3),
        right: theme.spacing(3),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(3),
    },
    space: {
      top: "auto",
      bottom: theme.spacing(7),
      left: "50%",
      transform: "translateX(-50%)",
      position: "fixed",
      width: theme.spacing(30),
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(20),
        bottom: theme.spacing(3),
      },
    },
  }),
);

export default SpaceFabStyles;
