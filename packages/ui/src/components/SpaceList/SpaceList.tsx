import React from "react";

import Props from "@sentrei/common/interfaces/SpaceList";
import SpacePanel from "@sentrei/ui/components/SpacePanel";

export default function SpaceList({space}: Props): JSX.Element {
  return (
    <div>
      <SpacePanel space={space} />
    </div>
  );
}
