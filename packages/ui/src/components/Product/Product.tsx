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
    connectSubTitle,
    connectTitle,
    dataImg,
    dataSubTitle,
    dataTitle,
    videoImg,
    videoSubTitle,
    videoTitle,
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
        img={dataImg}
        subTitle={dataSubTitle}
        title={dataTitle}
      />
      <Box py={3} />
      <ProductCard
        left
        img={connectImg}
        subTitle={connectSubTitle}
        title={connectTitle}
      />
    </Container>
  );
}

Product.propTypes = {
  connectImg: PropTypes.node.isRequired,
  connectSubTitle: PropTypes.string.isRequired,
  connectTitle: PropTypes.string.isRequired,
  dataImg: PropTypes.node.isRequired,
  dataSubTitle: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  videoImg: PropTypes.node.isRequired,
  videoSubTitle: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
};
