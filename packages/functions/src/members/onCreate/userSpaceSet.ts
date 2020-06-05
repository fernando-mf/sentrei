import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@sentrei/common/models/Space";

const db = admin.firestore();

const userSpaceSet = functions.firestore
  .document("spaces/{groupId}/members/{userId}")
  .onCreate(async (snap, context) => {
    const {groupId, userId} = context.params;
    const doc = await db.doc(`spaces/${groupId}`).get();
    const data = doc.data() as Space.Response;
    const group = {
      ...data,
      id: groupId,
      joined: admin.firestore.FieldValue.serverTimestamp(),
    };

    return db.doc(`users/${userId}/spaces/${groupId}`).set(group);
  });

export default userSpaceSet;
