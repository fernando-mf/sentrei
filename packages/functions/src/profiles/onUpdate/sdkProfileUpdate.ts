import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Profile from "@sentrei/common/models/Profile";

const auth = admin.auth();

/**
 * Update sdk from profile
 */
const sdkProfileUpdate = functions.firestore
  .document("profiles/{id}")
  .onUpdate((change, context) => {
    const {id} = context.params;
    const {name, photo, username} = change.after.data() as Profile.Response;
    const updateUser = auth.updateUser(id, {
      displayName: name,
      photoURL: photo,
    });

    const updateClaims = auth.setCustomUserClaims(id, {username});

    return Promise.all([updateUser, updateClaims]);
  });

export default sdkProfileUpdate;
