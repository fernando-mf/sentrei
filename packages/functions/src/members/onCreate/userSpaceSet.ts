import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Space from "@sentrei/common/models/Space";

const db = admin.firestore();

const userSpaceSet = functions.firestore
  .document("spaces/{spaceId}/members/{userId}")
  .onCreate(async (snap, context) => {
    const {spaceId, userId} = context.params;
    const doc = await db.doc(`spaces/${spaceId}`).get();
    const data = doc.data() as Space.Response;
    const space = {
      ...data,
      spaceId,
      joined: admin.firestore.FieldValue.serverTimestamp(),
    };

    return db.doc(`users/${userId}/spaces/${spaceId}`).set(space);
  });

export default userSpaceSet;
