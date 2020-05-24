/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from "firebase/app";
import React from "react";
import "firebase/auth";

import createAuthUserInfo from "@sentrei/common/utils/auth/createAuthUserInfo";

export const AuthUserInfoContext = React.createContext(createAuthUserInfo());

export const useAuthUserInfo = (): any => {
  return React.useContext(AuthUserInfoContext);
};
