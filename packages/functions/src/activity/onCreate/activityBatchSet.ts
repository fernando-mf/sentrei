import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";

const db = admin.firestore();

const activityBatchSet = functions.firestore
  .document("activity/{editId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;

    if (data.action === "deleted") {
      return false;
    }

    const batch = db.batch();
    const spaceData = {
      updatedAt: data.updatedAt,
      updatedBy: data.user,
      updatedById: data.createdById,
    };

    data.spaces.forEach(item => {
      const spaceRef = db.doc(`spaces/${item}`);
      batch.set(spaceRef, spaceData, {merge: true});
    });

    return batch.commit();
  });

export default activityBatchSet;
