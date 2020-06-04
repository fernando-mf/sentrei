import firebase, {analytics, auth} from "@sentrei/common/utils/firebase";

const signup = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  analytics().logEvent("sign_up", {method: "password"});
  return auth.createUserWithEmailAndPassword(email, password);
};

export default signup;
