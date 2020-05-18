import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const SectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: theme.spacing(9, 3, 6),
    },
  }),
);

export default SectionStyles;
