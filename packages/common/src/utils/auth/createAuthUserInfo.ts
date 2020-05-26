import createAuthUser from "@sentrei/common/utils/auth/createAuthUser";

const createAuthUserInfo = ({firebaseUser = null, token = null} = {}) => {
  return {
    AuthUser: createAuthUser(firebaseUser),
    token,
  };
};

export default createAuthUserInfo;
