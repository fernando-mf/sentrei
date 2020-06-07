import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import Member from "@sentrei/common/models/Member";
import Room from "@sentrei/common/models/Room";

const db = admin.firestore();

const roomMemberSet = functions.firestore
  .document("rooms/{id}")
  .onCreate(snap => {
    const {createdAt, createdBy, createdById} = snap.data() as Room.Response;
    const member: Member.Response = {
      ...createdBy,
      joined: createdAt,
    };

    return db.doc(`rooms/${snap.id}/members/${createdById}`).set(member);
  });

export default roomMemberSet;
