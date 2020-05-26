import {get, has} from "lodash";
// having trouble getting types from lodash/object

export const createAuthUser = (firebaseUser: firebase.User | null) => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null;
  }
  return {
    id: get(firebaseUser, "uid"),
    email: get(firebaseUser, "email"),
    emailVerified: has(firebaseUser, "emailVerified")
      ? get(firebaseUser, "emailVerified") // client SDK
      : get(firebaseUser, "email_verified"), // admin SDK
    displayName: has(firebaseUser, "displayName")
      ? get(firebaseUser, "displayName") // client SDK
      : get(firebaseUser, "display_name"), // admin SDK
  };
};

export const createAuthUserInfo = ({
  firebaseUser = null,
  token = null,
} = {}) => {
  return {
    AuthUser: createAuthUser(firebaseUser),
    token,
  };
};
