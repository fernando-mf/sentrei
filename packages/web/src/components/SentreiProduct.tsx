import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/types/components/Product";
import {analytics} from "@sentrei/common/utils/firebase";
import Product from "@sentrei/ui/components/Product";
import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

type Props = Omit<Original, "connectImg" | "dataImg" | "videoImg">;

export default function SentreiProduct({
  connectTitleOne,
  connectTitleTwo,
  connectTitleThree,
  connectSubTitle,
  dataTitleOne,
  dataTitleTwo,
  dataTitleThree,
  dataSubTitle,
  videoTitleOne,
  videoTitleTwo,
  videoTitleThree,
  videoSubTitle,
}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "product"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <Product
        key={i18n.language}
        connectImg={<ConnectPicture />}
        connectTitleOne={connectTitleOne}
        connectTitleTwo={connectTitleTwo}
        connectTitleThree={connectTitleThree}
        connectSubTitle={connectSubTitle}
        dataImg={<DataPicture />}
        dataTitleOne={dataTitleOne}
        dataTitleTwo={dataTitleTwo}
        dataTitleThree={dataTitleThree}
        dataSubTitle={dataSubTitle}
        videoImg={<VideoPicture />}
        videoTitleOne={videoTitleOne}
        videoTitleTwo={videoTitleTwo}
        videoTitleThree={videoTitleThree}
        videoSubTitle={videoSubTitle}
      />
    </div>
  );
}
