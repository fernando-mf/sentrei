/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import PropTypes from "prop-types";
import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Product from "@sentrei/ui/components/Product";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

import ConnectPicture from "./Picture/ConnectPicture";

export default function SentreiProduct(props: any): JSX.Element {
  const {
    connectTitle,
    connectSubTitle,
    dataTitle,
    dataSubTitle,
    videoTitle,
    videoSubTitle,
  } = props;

  return (
    <>
      <Product
        key={i18n.language}
        connectImg={<ConnectPicture />}
        connectTitle={connectTitle}
        connectSubTitle={connectSubTitle}
        dataImg={<DataPicture />}
        dataTitle={dataTitle}
        dataSubTitle={dataSubTitle}
        videoImg={<VideoPicture />}
        videoTitle={videoTitle}
        videoSubTitle={videoSubTitle}
      />
    </>
  );
}

SentreiProduct.propTypes = {
  connectSubTitle: PropTypes.string.isRequired,
  connectTitle: PropTypes.string.isRequired,
  dataSubTitle: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  videoSubTitle: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
};
