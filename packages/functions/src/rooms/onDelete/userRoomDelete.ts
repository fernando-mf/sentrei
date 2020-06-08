import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const userRoomDelete = functions.firestore
  .document("rooms/{id}")
  .onDelete(async snap => {
    const {id} = snap;
    const users = await db.collection(`rooms/${id}/members`).get();
    const promises = users.docs.map(user =>
      db.doc(`users/${user.id}/rooms/${id}`).delete(),
    );

    return Promise.all(promises);
  });

export default userRoomDelete;