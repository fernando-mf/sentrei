import firebase from "firebase/app";
import React from "react";

const useFirebaseAuth = (): {
  initializing: boolean;
  user: firebase.User | null;
} => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  function onChange(user: firebase.User | null): void {
    setState({initializing: false, user});
  }

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return (): void => unsubscribe();
  }, []);

  return state;
};

export default useFirebaseAuth;
