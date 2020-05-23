import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Product";
import Product from "@sentrei/ui/components/Product";
import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

export default function SentreiProduct({
  connectTitle,
  connectSubTitle,
  dataTitle,
  dataSubTitle,
  videoTitle,
  videoSubTitle,
}: Props): JSX.Element {
  return (
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
  );
}
