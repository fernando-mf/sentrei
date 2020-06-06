import * as admin from "firebase-admin";

import Activity from "@sentrei/common/models/Activity";

export type ContentTypes = Activity.Response;

interface LeaderboardData {
  createdById: string;
  xp: admin.firestore.FieldValue;
}

const scoreUpdate = (
  data: ContentTypes,
  score?: number,
  user?: string,
): Promise<FirebaseFirestore.WriteResult[]> => {
  const db = admin.firestore();
  const batch = db.batch();
  const scoreField = admin.firestore.FieldValue.increment(score || 1);

  const userId = user || data.createdById;

  const newData: LeaderboardData = {
    createdById: userId,
    xp: scoreField,
  };

  data.spaces.forEach(space => {
    const topicRef = db.doc(`spaces/${space}/leaderboard/${userId}`);
    batch.set(topicRef, newData, {merge: true});
  });

  return batch.commit();
};

export default scoreUpdate;
