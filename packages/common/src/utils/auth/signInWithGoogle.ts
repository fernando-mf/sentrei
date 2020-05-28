import firebase from "firebase/app";
import "firebase/auth";

const signInWithGoogle = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().signInWithRedirect(provider);
      });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default signInWithGoogle;
