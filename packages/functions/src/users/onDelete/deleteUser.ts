/* eslint-disable @typescript-eslint/no-explicit-any */
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const db = admin.firestore();

const deleteUser = functions.auth.user().onDelete(async user => {
  const batch: any[] = [];
  const profile = db.doc(`profiles/${user.uid}`);
  const userData = db.doc(`users/${user.uid}`);

  batch.push(profile.delete());
  batch.push(userData.delete());

  return Promise.all(batch);
});

export default deleteUser;
