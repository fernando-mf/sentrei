import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {isEqual, pick} from "lodash";

import Activity from "@sentrei/common/models/Activity";
import Room from "@sentrei/common/models/Room";

const db = admin.firestore();

const activityRoomUpdate = functions.firestore
  .document("rooms/{id}")
  .onUpdate(async (change, context) => {
    const {id} = context.params;
    const before = change.before.data() as Room.Response;
    const after = change.after.data() as Room.Response;
    const fieldsToTrack = ["description", "photo"];
    const beforeChanges = pick(before, fieldsToTrack);
    const afterChanges = pick(after, fieldsToTrack);
    const noChanges = isEqual(beforeChanges, afterChanges);

    if (noChanges) {
      return false;
    }

    const activity: Activity.UpdateRoom = {
      action: "updated",
      after,
      before,
      category: "rooms",
      categoryId: id,
      createdById: after.updatedById,
      updatedAt: after.updatedAt,
      user: after.updatedBy,
      userNotification:
        after.createdById === after.updatedById ? [] : [after.createdById],
    };

    return db.collection("activity").add(activity);
  });

export default activityRoomUpdate;
