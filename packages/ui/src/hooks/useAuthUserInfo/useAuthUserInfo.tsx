/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "firebase/auth";

import createAuthUserInfo from "@sentrei/common/utils/auth/createAuthUserInfo";

const AuthUserInfoContext = React.createContext(createAuthUserInfo());

const useAuthUserInfo = (): any => {
  return React.useContext(AuthUserInfoContext);
};

export default useAuthUserInfo;
