import React from "react";

import {useInView} from "react-intersection-observer";

import {i18n} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Screen from "@sentrei/ui/components/Screen";
import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

export default function SentreiScreen(): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      analytics().logEvent("landing", {section: "screen"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <Screen
        key={i18n.language}
        imgOne={<VideoPicture />}
        imgTwo={<ConnectPicture />}
        imgThree={<DataPicture />}
      />
    </div>
  );
}
