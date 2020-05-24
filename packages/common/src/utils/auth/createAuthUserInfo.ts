/* eslint-disable @typescript-eslint/no-explicit-any */
import {get, has} from "lodash";

const createAuthUser = (
  firebaseUser: firebase.User | null,
): {
  id: string;
  email: string | null;
  emailVerified: any;
} | null => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null;
  }
  return {
    id: get(firebaseUser, "uid"),
    email: get(firebaseUser, "email"),
    emailVerified: has(firebaseUser, "emailVerified")
      ? get(firebaseUser, "emailVerified") // client
      : get(firebaseUser, "email_verified"), // admin
  };
};

const createAuthUserInfo = ({firebaseUser = null, token = null} = {}): any => {
  return {
    AuthUser: createAuthUser(firebaseUser),
    token,
  };
};

export default createAuthUserInfo;
