import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";

const db = admin.firestore();

const actionCategorySet = functions.firestore
  .document("activity/{editId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;
    const action = `${data.action}_${data.category}`;
    const update = {
      [action]: admin.firestore.FieldValue.increment(1),
    };

    return db.doc(`actions/${data.createdById}`).set(update, {merge: true});
  });

export default actionCategorySet;
