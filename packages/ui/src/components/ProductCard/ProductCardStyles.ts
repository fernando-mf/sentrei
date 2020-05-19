import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const ProductStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: theme.spacing(0, 3, 0),
    },
    product: {
      padding: theme.spacing(0, 3, 0),
    },
  }),
);

export default ProductStyles;
