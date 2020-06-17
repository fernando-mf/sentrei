import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React from "react";

import {useTranslation} from "@sentrei/common/i18n";
import Props from "@sentrei/common/types/components/Product";
import ProductCard from "@sentrei/ui/components/ProductCard";

import ProductStyles from "./ProductStyles";

export default function Product({
  connectImg,
  dataImg,
  videoImg,
}: Props): JSX.Element {
  const classes = ProductStyles();
  const {t} = useTranslation();

  return (
    <Container maxWidth="lg" component="main" className={classes.product}>
      <ProductCard
        left
        color="secondary"
        img={videoImg}
        subTitle={t("product.videoSubTitle")}
        titleOne={t("product.videoTitleOne")}
        titleTwo={t("product.videoTitleTwo")}
        titleThree={t("product.videoTitleThree")}
        type="highlight"
      />
      <Box py={3} />
      <ProductCard
        left={false}
        color="primary"
        img={connectImg}
        subTitle={t("product.connectSubTitle")}
        titleOne={t("product.connectTitleOne")}
        titleTwo={t("product.connectTitleTwo")}
        titleThree={t("product.connectTitleThree")}
        type="box"
      />
      <Box py={3} />
      <ProductCard
        left
        color="secondary"
        img={dataImg}
        subTitle={t("product.dataSubTitle")}
        titleOne={t("product.dataTitleOne")}
        titleTwo={t("product.dataTitleTwo")}
        titleThree={t("product.dataTitleThree")}
        type="highlight"
      />
    </Container>
  );
}
