import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Metadata from "@sentrei/common/models/Metadata";

const db = admin.firestore();

/**
 * Batch set activity for spaces
 */
const activityBatchSet = functions.firestore
  .document("activity/{editId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;

    if (data.action === "deleted") {
      return false;
    }

    const batch = db.batch();
    const spaceData: Metadata.Update = {
      updatedAt: data.updatedAt,
      updatedBy: data.user,
      updatedById: data.createdById,
    };

    const spaceRef = db.doc(`spaces/${data.space}`);
    batch.set(spaceRef, spaceData, {merge: true});

    return batch.commit();
  });

export default activityBatchSet;
