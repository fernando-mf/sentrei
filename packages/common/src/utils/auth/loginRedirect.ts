import firebase from "firebase/app";
import Router from "next/router";
import "firebase/auth";

// utils
import isBrowser from "@sentrei/common/utils/isBrowser";

const loginRedirect = (): firebase.User | null => {
  const user = firebase.auth().currentUser;

  if (isBrowser() && !user) {
    // redirect to login page
    Router.push({
      pathname: "/login",
      query: {
        authRequired: true,
        // Router.pathname returns /page
        // but only the page name is needed, the
        redirectTo: Router.pathname,
      },
    });
  }

  return user;
};

export default loginRedirect;
