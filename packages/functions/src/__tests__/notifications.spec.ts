import * as firebase from "@firebase/testing";

import {notificationResponse} from "../__dummy__/Notification";
import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let collection: firebase.firestore.CollectionReference;
let doc: firebase.firestore.DocumentReference;

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "userId"});
  collection = db.collection("users/userId/notifications");
  doc = collection.doc("notificationId");
  await loadFirestoreRules();
  await admin
    .doc("users/userId/notifications/notificationId")
    .set(notificationResponse);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Users can read their own notifications", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Users can list their own notifications", async done => {
  await firebase.assertSucceeds(collection.get());
  done();
});

test("Cannot read notifications from other users", async done => {
  const ref = db.doc("users/otherUserId/notifications/notificationId");
  await firebase.assertFails(ref.get());
  done();
});

test("Cannot list notifications from other users", async done => {
  const ref = db.collection("users/otherUserId/notifications");
  await firebase.assertFails(ref.get());
  done();
});

test("Cannot update a notification", async done => {
  await firebase.assertFails(doc.update(notificationResponse));
  done();
});

test("Cannot delete a notification", async done => {
  await firebase.assertFails(doc.delete());
  done();
});
