import firebase from "firebase/app";

import "firebase/auth";
import isBrowser from "@sentrei/common/utils/isBrowser";

export default async function logout(): Promise<boolean> {
  try {
    await firebase.auth().signOut();
    if (isBrowser()) {
      // Remove the server-side rendered user data element. See:
      // https://github.com/zeit/next.js/issues/2252#issuecomment-353992669
      const elem = window.document.getElementById("__MY_AUTH_USER_INFO");
      if (elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
      }
    }
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return false;
  }
}
