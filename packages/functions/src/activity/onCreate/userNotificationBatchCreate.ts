import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Notification from "@sentrei/common/models/Notification";

const db = admin.firestore();

const userNotificationBatchCreate = functions.firestore
  .document("activity/{id}")
  .onCreate((snap, context) => {
    const batch = db.batch();
    const {id} = context.params;
    const data = snap.data() as Activity.Response;

    if (data.userNotification.length === 0) {
      return false;
    }

    const notification: Notification.Create = {
      activityId: id,
      type: "update",
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      user: data.user,
    };

    data.userNotification.forEach(createdById => {
      const ref = db.collection(`users/${createdById}/notifications`);
      batch.create(ref.doc(), notification);
    });

    return batch.commit();
  });

export default userNotificationBatchCreate;
