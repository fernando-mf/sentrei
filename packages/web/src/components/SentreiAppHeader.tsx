import React from "react";

import {i18n} from "@sentrei/common/i18n";
import AppHeader from "@sentrei/ui/components/AppHeader";
import LogoPicture from "@sentrei/web/components/Picture/LogoPicture";

export default function SentreiAppHeader(): JSX.Element {
  return <AppHeader key={i18n.language} logo={<LogoPicture />} />;
}
