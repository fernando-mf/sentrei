import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Space from "@sentrei/common/models/Space";

const db = admin.firestore();

const activitySpaceDelete = functions.firestore
  .document("spaces/{id}")
  .onDelete(async (snap, context) => {
    const {id} = context.params;
    const data = snap.data() as Space.Response;

    const activity: Activity.DeleteSpace = {
      action: "deleted",
      before: data,
      after: null,
      category: "spaces",
      categoryId: id,
      createdById: data.updatedById,
      updatedAt: data.updatedAt,
      spaceId: id,
      user: data.updatedBy,
      userNotification:
        data.createdById === data.updatedById ? [] : [data.createdById],
    };

    return db.collection("activity").add(activity);
  });

export default activitySpaceDelete;
