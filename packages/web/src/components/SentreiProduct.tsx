import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/interfaces/Product";
import logEvent from "@sentrei/common/utils/logEvent";
import Product from "@sentrei/ui/components/Product";
import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

type Props = Omit<Original, "connectImg" | "dataImg" | "videoImg">;

export default function SentreiProduct({
  connectTitle,
  connectSubTitle,
  dataTitle,
  dataSubTitle,
  videoTitle,
  videoSubTitle,
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      logEvent("landing", {section: "product"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
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
    </div>
  );
}
