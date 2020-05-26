import React from "react";

import createAuthUserInfo from "@sentrei/common/utils/auth/createAuthUserInfo";

const AuthUserInfoContext = React.createContext(createAuthUserInfo());

export default AuthUserInfoContext;
