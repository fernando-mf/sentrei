import * as functions from "firebase-functions";

import Username from "@sentrei/common/models/username";

import adminDB from "@sentrei/common/utils/adminDB";

const updateProfile = functions.firestore
  .document("usernames/{username}")
  .onCreate(snap => {
    const data = snap.data() as Username;
    return adminDB.doc(`profile/${data.uid}`).update({username: snap.id});
  });

export default updateProfile;
