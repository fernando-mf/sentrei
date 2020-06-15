import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const SpaceCreateStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      marginTop: theme.spacing(5),
      width: "100%",
    },
    divider: {
      border: 0,
      height: "1px",
      width: "100%",
      background: "#333",
      backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);

export default SpaceCreateStyles;
