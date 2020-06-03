import * as React from "react";

import GlobalState from "@sentrei/common/models/GlobalState";

const GlobalContext = React.createContext<GlobalState>({
  user: undefined,
});

export default GlobalContext;
