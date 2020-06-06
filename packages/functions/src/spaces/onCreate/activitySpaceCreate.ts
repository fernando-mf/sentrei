import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Space from "@sentrei/common/models/Space";

const db = admin.firestore();

const activitySpaceCreate = functions.firestore
  .document("spaces/{id}")
  .onCreate(async (snap, context) => {
    const data = snap.data() as Space.Response;

    if (!data.createdById) {
      return false;
    }

    const {id} = context.params;
    const activity: Activity.CreateSpace = {
      action: "created",
      before: null,
      after: data,
      category: "spaces",
      categoryId: id,
      createdById: data.createdById,
      spaces: [id],
      updatedAt: data.updatedAt,
      user: data.updatedBy,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activitySpaceCreate;
