/* eslint-disable @typescript-eslint/no-explicit-any */

import * as functions from "firebase-functions";

import Activity from "@sentrei/common/models/Activity";

import scoreActions from "../../helpers/scoreActions";
import scoreUpdate from "../../helpers/scoreUpdate";

/**
 * Batch update scores for each activity
 */
const scoreBatchUpdate = functions.firestore
  .document("activity/{editId}")
  .onCreate(snap => {
    const data = snap.data() as Activity.Response;
    const isAuthor = data.createdById === data.before?.createdById;
    const scoreAction = `${data.action}_${data.category}`;
    let score: number = (scoreActions as any)[scoreAction] || 1;

    if (data.action === "deleted" && isAuthor) {
      score = -(scoreActions as any)[`created_${data.category}`] || -1;
    }

    return scoreUpdate(data, score, data.createdById);
  });

export default scoreBatchUpdate;
