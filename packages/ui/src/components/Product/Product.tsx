/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import React from "react";

import ProductCard from "@sentrei/ui/components/ProductCard";

import ProductStyles from "./ProductStyles";

export default function Product(props: any): JSX.Element {
  const classes = ProductStyles();
  const {
    connectImg,
    connectTitle,
    connectSubTitle,
    dataImg,
    dataTitle,
    dataSubTitle,
    videoImg,
    videoTitle,
    videoSubTitle,
  } = props;

  return (
    <Container maxWidth="lg" component="main" className={classes.product}>
      <ProductCard
        left
        img={videoImg}
        subTitle={videoSubTitle}
        title={videoTitle}
      />
      <Box py={3} />
      <ProductCard
        left={false}
        img={connectImg}
        subTitle={connectSubTitle}
        title={connectTitle}
      />
      <Box py={3} />
      <ProductCard
        left
        img={dataImg}
        subTitle={dataSubTitle}
        title={dataTitle}
      />
    </Container>
  );
}

Product.propTypes = {
  connectImg: PropTypes.node.isRequired,
  connectTitle: PropTypes.string.isRequired,
  connectSubTitle: PropTypes.string.isRequired,
  dataImg: PropTypes.node.isRequired,
  dataTitle: PropTypes.string.isRequired,
  dataSubTitle: PropTypes.string.isRequired,
  videoImg: PropTypes.node.isRequired,
  videoTitle: PropTypes.string.isRequired,
  videoSubTitle: PropTypes.string.isRequired,
};
