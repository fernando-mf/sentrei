import firebase from "firebase/app";
import React, {useEffect, useState} from "react";

import "firebase/auth";
import createAuthUserInfo from "@sentrei/common/utils/auth/createAuthUserInfo";
import setSession from "@sentrei/common/utils/firebaseSessionHandler";
import initFirebase from "@sentrei/common/utils/initFirebase";

initFirebase();

// https://benmcmahen.com/using-firebase-with-react-hooks/

// Defaults to empty AuthUserInfo object.
export const AuthUserInfoContext = React.createContext(createAuthUserInfo());

export const useAuthUserInfo = () => {
  return React.useContext(AuthUserInfoContext);
};

// Returns a Firebase JS SDK user object.
export const useFirebaseAuth = () => {
  const [state, setState] = useState(() => {
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

  useEffect(() => {
    // Listen for auth state changes.
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    // Unsubscribe to the listener when unmounting.
    return () => unsubscribe();
  }, []);

  return state;
};
