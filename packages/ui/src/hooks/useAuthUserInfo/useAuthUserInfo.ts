/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import AuthUserInfoContext from "@sentrei/ui/context/AuthUserInfoContext";

const useAuthUserInfo = (): any => {
  return React.useContext(AuthUserInfoContext);
};

export default useAuthUserInfo;
