import firebase, {analytics, auth} from "@sentrei/common/utils/firebase";

const signin = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  analytics().logEvent("login", {method: "password"});
  return auth.signInWithEmailAndPassword(email, password);
};

export default signin;
