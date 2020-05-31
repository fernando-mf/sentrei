import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";

import Props from "@sentrei/common/interfaces/Product";
import ProductCard from "@sentrei/ui/components/ProductCard";

import ProductStyles from "./ProductStyles";

export default function Product({
  connectImg,
  connectTitleOne,
  connectTitleTwo,
  connectTitleThree,
  connectSubTitle,
  dataImg,
  dataTitleOne,
  dataTitleTwo,
  dataTitleThree,
  dataSubTitle,
  videoImg,
  videoTitleOne,
  videoTitleTwo,
  videoTitleThree,
  videoSubTitle,
}: Props): JSX.Element {
  const classes = ProductStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.product}>
      <ProductCard
        left
        img={videoImg}
        subTitle={videoSubTitle}
        titleOne={videoTitleOne}
        titleTwo={videoTitleTwo}
        titleThree={videoTitleThree}
        type="underline"
      />
      <Box py={3} />
      <ProductCard
        left={false}
        img={connectImg}
        subTitle={connectSubTitle}
        titleOne={connectTitleOne}
        titleTwo={connectTitleTwo}
        titleThree={connectTitleThree}
        type="box"
      />
      <Box py={3} />
      <ProductCard
        left
        img={dataImg}
        subTitle={dataSubTitle}
        titleOne={dataTitleOne}
        titleTwo={dataTitleTwo}
        titleThree={dataTitleThree}
        type="circle"
      />
    </Container>
  );
}
