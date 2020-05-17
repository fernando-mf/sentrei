/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Header from "@sentrei/ui/components/Header";

import LogoPicture from "@sentrei/web/components/LogoPicture";

function SpyHeader(): JSX.Element {
  return (
    <>
      <Header spy logo={<LogoPicture />} />
    </>
  );
}
export default SpyHeader;
