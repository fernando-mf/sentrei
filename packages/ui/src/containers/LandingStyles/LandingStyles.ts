import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const LandingStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      minHeight: "50px",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap",
    },
  }),
);

export default LandingStyles;
