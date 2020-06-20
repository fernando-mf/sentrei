import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const spaceDeleteNone = functions.firestore
  .document("spaces/{spaceId}/members/{userId}")
  .onDelete(async (_, context) => {
    const {spaceId} = context.params;
    const users = await db.collection(`spaces/${spaceId}/members`).get();
    if (users.empty) {
      return db.doc(`spaces/${spaceId}`).delete();
    }
    return null;
  });

export default spaceDeleteNone;
