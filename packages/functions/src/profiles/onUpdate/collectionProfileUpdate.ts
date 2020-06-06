/* eslint-disable @typescript-eslint/no-explicit-any */
import * as functions from "firebase-functions";

import {getProfileChanges, updateProfile} from "../../helpers";

const collectionProfileUpdate = functions.firestore
  .document("profiles/{uid}")
  .onUpdate(async (change, context) => {
    const profileData = getProfileChanges(change);

    if (!profileData) {
      return false;
    }

    const {uid} = context.params;
    const collections = ["spaces"];
    const promises: any[] = [];

    collections.forEach(item => {
      promises.push(updateProfile(change, item, "created", uid));
      promises.push(updateProfile(change, item, "updated", uid));
    });

    return Promise.all(promises);
  });

export default collectionProfileUpdate;
