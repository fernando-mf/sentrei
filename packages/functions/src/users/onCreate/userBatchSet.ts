import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Profile from "@sentrei/common/models/Profile";
import User from "@sentrei/common/models/User";

import getNameFromEmail from "../../helpers/getNameFromEmail";

const db = admin.firestore();

/**
 * Setup profile on user create
 */
const userBatchSet = functions.auth.user().onCreate(async user => {
  const batch = db.batch();

  const userInfo = {
    name: user.displayName || getNameFromEmail(user.email || user.uid),
    photo: user.photoURL || null,
    username: user.uid,
  };

  const userData: User.Response = {
    ...userInfo,
    email: user.email,
    role: "viewer",
    notificationCount: 0,
    notificationSettings: {
      chat: ["app", "email"],
      invitation: ["app", "email"],
      update: ["app", "email"],
    },
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

export default userBatchSet;
