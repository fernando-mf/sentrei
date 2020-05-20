/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Product from "@sentrei/ui/components/Product";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

import ConnectPicture from "./Picture/ConnectPicture";

function SentreiProduct(): JSX.Element {
  return (
    <>
      <Product
        connectImg={<ConnectPicture />}
        connectSubTitle="connect"
        connectTitle="connect"
        dataImg={<DataPicture />}
        dataSubTitle="data"
        dataTitle="data"
        videoImg={<VideoPicture />}
        videoSubTitle="video"
        videoTitle="video"
      />
    </>
  );
}

export default SentreiProduct;
