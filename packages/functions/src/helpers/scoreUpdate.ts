import * as admin from "firebase-admin";

import Activity from "@sentrei/common/models/Activity";

export type ContentTypes = Activity.Response;

const scoreUpdate = (
  data: ContentTypes,
  score?: number,
  user?: string,
  groupId?: string | null,
): Promise<FirebaseFirestore.WriteResult[]> => {
  const db = admin.firestore();
  const batch = db.batch();
  const scoreField = admin.firestore.FieldValue.increment(score || 1);

  const userId = user || data.createdById;

  return batch.commit();
};

export default scoreUpdate;
