/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from "firebase/app";
import React from "react";

import "firebase/auth";

const useFirebaseAuth = (): any => {
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
    // Listen for auth state changes.
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    // Unsubscribe to the listener when unmounting.
    return (): void => unsubscribe();
  }, []);

  return state;
};

export default useFirebaseAuth;
