import React from "react";

import {i18n} from "@sentrei/common/i18n";
import Original from "@sentrei/common/interfaces/Screen";
import Screen from "@sentrei/ui/components/Screen";

import ConnectPicture from "@sentrei/web/components/Picture/ConnectPicture";
import DataPicture from "@sentrei/web/components/Picture/DataPicture";
import VideoPicture from "@sentrei/web/components/Picture/VideoPicture";

type Props = Omit<Original, "imgOne" | "imgTwo" | "imgThree">;

export default function SentreiScreen({
  labelOne,
  labelTwo,
  labelThree,
}: Props): JSX.Element {
  return (
    <Screen
      key={i18n.language}
      imgOne={<ConnectPicture />}
      imgTwo={<DataPicture />}
      imgThree={<VideoPicture />}
      labelOne={labelOne}
      labelTwo={labelTwo}
      labelThree={labelThree}
    />
  );
}
