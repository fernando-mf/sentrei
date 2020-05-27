import firebase from "firebase/app";
import "firebase/auth";

const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

  try {
    await firebase
      .auth()
      .signInWithRedirect(provider)
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);
      })
      // eslint-disable-next-line no-console
      .catch(e => console.log(e.message));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default signInWithGoogle;
