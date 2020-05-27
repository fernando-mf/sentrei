/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import Room from "@sentrei/ui/components/Room";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Rooms({t}: any): JSX.Element {
  return (
    <>
      <Room />
    </>
  );
}

Rooms.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default Rooms;
