import firebase from "firebase/app";
import Router from "next/router";
import "firebase/auth";

import isBrowser from "@sentrei/common/utils/isBrowser";

const signinRedirect = () => {
  const user = firebase.auth().currentUser;

  if (isBrowser() && !user) {
    Router.push({
      pathname: "/signin",
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

export default signinRedirect;
