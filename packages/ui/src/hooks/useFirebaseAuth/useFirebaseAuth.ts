import firebase from "firebase/app";
import React from "react";

import "firebase/auth";
import setSession from "@sentrei/common/utils/firebaseSessionHandler";

const useFirebaseAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  function onChange(user: firebase.User | null) {
    setState({initializing: false, user});

    // Call server to update session.
    setSession(user);
  }

  React.useEffect(() => {
    // Listen for auth state changes.
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    // Unsubscribe to the listener when unmounting.
    return () => unsubscribe();
  }, []);

  return state;
};

export default useFirebaseAuth;
