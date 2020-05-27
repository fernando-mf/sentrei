/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Room from "@sentrei/ui/components/Room";

function Rooms({t}: any): JSX.Element {
  return <Room />;
}

Rooms.getInitialProps = (): {
  namespacesRequired: string[];
} => ({
  namespacesRequired: ["index"],
});

export default Rooms;
