import React from "react";

import AuthUserInfoContext from "@sentrei/ui/context/AuthUserInfoContext";

const useAuthUserInfo = () => {
  return React.useContext(AuthUserInfoContext);
};

export default useAuthUserInfo;
