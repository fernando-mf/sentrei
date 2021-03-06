import * as functions from "firebase-functions";

import {getProfileChanges, updateProfile} from "../../helpers";

/**
 * Add profiles to each collection
 */
const collectionProfileUpdate = functions.firestore
  .document("profiles/{uid}")
  .onUpdate(async (change, context) => {
    const profileData = getProfileChanges(change);

    if (!profileData) {
      return false;
    }

    const {uid} = context.params;
    const collections = ["spaces"];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promises: any[] = [];

    collections.forEach(item => {
      promises.push(updateProfile(change, item, "created", uid));
      promises.push(updateProfile(change, item, "updated", uid));
    });

    return Promise.all(promises);
  });

export default collectionProfileUpdate;
