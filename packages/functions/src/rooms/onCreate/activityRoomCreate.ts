import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Room from "@sentrei/common/models/Room";

const db = admin.firestore();

const activityRoomCreate = functions.firestore
  .document("rooms/{id}")
  .onCreate(async (snap, context) => {
    const data = snap.data() as Room.Response;

    if (!data.createdById) {
      return false;
    }

    const {id} = context.params;
    const activity: Activity.CreateRoom = {
      action: "created",
      before: null,
      after: data,
      category: "rooms",
      categoryId: id,
      createdById: data.createdById,
      spaceId: id,
      updatedAt: data.updatedAt,
      user: data.updatedBy,
      userNotification: [],
    };

    return db.collection("activity").add(activity);
  });

export default activityRoomCreate;
