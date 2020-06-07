import * as admin from "firebase-admin";

const statsUpdate = (
  collection: string,
  snap: admin.firestore.DocumentSnapshot,
  value: 1 | -1,
): Promise<FirebaseFirestore.WriteResult> => {
  const ref = admin.firestore().doc("analytics/stats");
  const changes = {
    [collection]: admin.firestore.FieldValue.increment(value),
  };

  return ref.update(changes);
};

export default statsUpdate;
