import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const userSpaceDelete = functions.firestore
  .document("spaces/{id}")
  .onDelete(async snap => {
    const {id} = snap;
    const users = await db.collection(`spaces/${id}/members`).get();
    const promises = users.docs.map(user =>
      db.doc(`users/${user.id}/spaces/${id}`).delete(),
    );

    return Promise.all(promises);
  });

export default userSpaceDelete;
