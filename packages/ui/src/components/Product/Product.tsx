import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";

import Props from "@sentrei/common/interfaces/Product";
import ProductCard from "@sentrei/ui/components/ProductCard";

import ProductStyles from "./ProductStyles";

export default function Product({
  connectImg,
  connectTitle,
  connectSubTitle,
  dataImg,
  dataTitle,
  dataSubTitle,
  videoImg,
  videoTitle,
  videoSubTitle,
}: Props): JSX.Element {
  const classes = ProductStyles();

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
