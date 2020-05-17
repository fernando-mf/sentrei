import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    feature: {
      padding: theme.spacing(8, 0, 6),
    },
  }),
);

export default HeaderStyles;
