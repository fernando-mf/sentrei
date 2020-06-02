import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Username from "@sentrei/common/models/Username";

const db = admin.firestore();

const updateProfile = functions.firestore
  .document("usernames/{username}")
  .onCreate(snap => {
    const data = snap.data() as Username;
    return db.doc(`profiles/${data.uid}`).update({username: snap.id});
  });

export default updateProfile;
