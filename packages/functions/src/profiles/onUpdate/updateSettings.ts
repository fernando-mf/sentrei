import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import getProfileChanges from "@sentrei/common/helpers/getProfileChanges";

const db = admin.firestore();

const updateSettings = functions.firestore
  .document("profiles/{uid}")
  .onUpdate(async (change, context) => {
    const {uid} = context.params;
    const profileData = getProfileChanges(change);

    if (!profileData) {
      return false;
    }

    return db.doc(`users/${uid}`).update(profileData);
  });

export default updateSettings;
