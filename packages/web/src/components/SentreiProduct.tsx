import React from "react";
import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Product from "@sentrei/ui/components/Product";
import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

export default function SentreiProduct(): JSX.Element {
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
        dataImg={<DataPicture />}
        videoImg={<VideoPicture />}
      />
    </div>
  );
}
