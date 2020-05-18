import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const ProductStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      padding: theme.spacing(3, 3, 3),
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(8, 0, 6),
    },
  }),
);

export default ProductStyles;
