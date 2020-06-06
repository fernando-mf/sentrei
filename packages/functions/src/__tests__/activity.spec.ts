import * as firebase from "@firebase/testing";

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
  db = initializeFirebaseApp({uid: "currentUser"});
  collection = db.collection("activity");
  doc = collection.doc("itemId");
  await loadFirestoreRules();
  await admin.doc("activity/itemId").set({title: "new activity"});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot create a new activity", async done => {
  await firebase.assertFails(collection.add({title: "new item"}));
  done();
});

test("Cannot update activity", async done => {
  await firebase.assertFails(doc.update({title: "updated!"}));
  done();
});

test("Cannot delete an activity", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Cannot get an activity", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Can list activities", async done => {
  const ref = collection.limit(20);
  await firebase.assertSucceeds(ref.get());
  done();
});

test("Cannot list more than 20 activities", async done => {
  const ref = collection.limit(21);
  await firebase.assertFails(ref.get());
  done();
});
