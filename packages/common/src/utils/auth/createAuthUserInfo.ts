/* eslint-disable @typescript-eslint/no-explicit-any */
import createAuthUser from "@sentrei/common/utils/auth/createAuthUser";

const createAuthUserInfo = ({firebaseUser = null, token = null} = {}): any => {
  return {
    AuthUser: createAuthUser(firebaseUser),
    token,
  };
};

export default createAuthUserInfo;
