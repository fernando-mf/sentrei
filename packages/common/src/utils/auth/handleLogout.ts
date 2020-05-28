/* globals window */
import firebase from "firebase/app";
import "firebase/auth";
import Router from "next/router";

const handleLogout = async (): Promise<boolean> => {
  try {
    await firebase.auth().signOut();
    Router.push({
      pathname: "/",
    });
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return false;
  }
};

export default handleLogout;
