import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";
import Room from "@sentrei/common/models/Room";

const db = admin.firestore();

/**
 * Create room activity on delete
 */
const activityRoomDelete = functions.firestore
  .document("rooms/{id}")
  .onDelete(async (snap, context) => {
    const {id} = context.params;
    const data = snap.data() as Room.Response;

    const activity: Activity.DeleteRoom = {
      action: "deleted",
      before: data,
      after: null,
      category: "rooms",
      categoryId: id,
      createdById: data.updatedById,
      updatedAt: data.updatedAt,
      spaceId: data.spaceId,
      user: data.updatedBy,
      userNotification:
        data.createdById === data.updatedById ? [] : [data.createdById],
    };

    return db.collection("activity").add(activity);
  });

export default activityRoomDelete;
