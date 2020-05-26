/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import createAuthUserInfo from "@sentrei/common/utils/auth/createAuthUserInfo";

const AuthUserInfoContext: any = React.createContext(createAuthUserInfo());

export default AuthUserInfoContext;
