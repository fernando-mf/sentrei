import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const memberCountMinus = functions.firestore
  .document("{collection}/{docId}/followers/{userId}")
  .onDelete((_, context) => {
    const {collection, docId} = context.params;
    return db
      .doc(`${collection}/${docId}`)
      .update({memberCount: admin.firestore.FieldValue.increment(-1)});
  });

export default memberCountMinus;
