/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Header from "@sentrei/ui/components/Header";

import LogoPicture from "@sentrei/web/components/Picture/LogoPicture";

function NavHeader(): JSX.Element {
  return (
    <>
      <Header logo={<LogoPicture />} />
    </>
  );
}

export default NavHeader;
