import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const SpaceCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      margin: theme.spacing(2),
    },
    media: {
      height: 190,
    },
  }),
);

export default SpaceCardStyles;
