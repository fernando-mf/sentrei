import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const ProductStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      padding: theme.spacing(0, 3, 0),
    },
    root: {
      flexGrow: 1,
    },
  }),
);

export default ProductStyles;
