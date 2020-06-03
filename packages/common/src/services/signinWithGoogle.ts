import firebase, {analytics, auth} from "@sentrei/common/utils/firebase";

const signinWithGoogle = (): Promise<firebase.auth.UserCredential> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  analytics().logEvent("login", {method: "google"});
  return auth.signInWithPopup(provider);
};

export default signinWithGoogle;
