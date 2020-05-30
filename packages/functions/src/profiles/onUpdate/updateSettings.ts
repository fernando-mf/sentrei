import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import getProfileChanges from "@sentrei/functions/helpers/getProfileChanges";

const db = admin.firestore();

const updateSettings = functions.firestore
  .document("profile/{uid}")
  .onUpdate(async (change, context) => {
    const {uid} = context.params;
    const profileData = getProfileChanges(change);

    if (!profileData) {
      return false;
    }

    return db.doc(`users/${uid}`).update(profileData);
  });

export default updateSettings;