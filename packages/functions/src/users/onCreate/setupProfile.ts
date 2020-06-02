import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Profile from "@sentrei/common/models/Profile";
import User from "@sentrei/common/models/User";

import getNameFromEmail from "@sentrei/functions/helpers/getNameFromEmail";

const db = admin.firestore();

const setupProfile = functions.auth.user().onCreate(async user => {
  const batch = db.batch();

  const userInfo = {
    name: user.displayName || getNameFromEmail(user.email || user.uid),
    username: user.uid,
  };

  const userData: User.Response = {
    ...userInfo,
    role: "viewer",
  };

  const profileData: Profile.Response = {
    ...userInfo,
  };

  const userRef = db.doc(`users/${user.uid}`);
  batch.set(userRef, userData, {merge: true});

  const profileRef = db.doc(`profiles/${user.uid}`);
  batch.set(profileRef, profileData, {merge: true});

  return batch.commit();
});

export default setupProfile;
