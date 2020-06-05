import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const spaceMemberCountPlus = functions.firestore
  .document("spaces/{spaceId}/members/{userId}")
  .onCreate((_, context) => {
    const {spaceId} = context.params;
    return db
      .doc(`spaces/${spaceId}`)
      .update({memberCount: admin.firestore.FieldValue.increment(1)});
  });

export default spaceMemberCountPlus;
