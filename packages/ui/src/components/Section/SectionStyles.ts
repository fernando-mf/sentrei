import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const SectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: theme.spacing(0, 3, 0),
    },
    title: {
      backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "0 3px, auto",
      transition: "all .3s ease-out",
      "&:hover": {
        backgroundSize: "30% 3px, auto",
      },
    },
  }),
);

export default SectionStyles;