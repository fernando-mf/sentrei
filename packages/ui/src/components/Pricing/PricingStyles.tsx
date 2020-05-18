import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const PricingStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    pricing: {
      padding: theme.spacing(9, 0, 6),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }),
);

export default PricingStyles;
