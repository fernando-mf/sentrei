import * as firebase from "@firebase/testing";

import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let collection: firebase.firestore.CollectionReference;
let doc: firebase.firestore.DocumentReference;

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "currentUser"});
  collection = db.collection("users/currentUser/rooms");
  doc = collection.doc("itemId");
  await loadFirestoreRules();
  await admin.doc("users/currentUser/rooms/itemId").set({});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot add a new room", async done => {
  await firebase.assertFails(collection.add({title: "test"}));
  done();
});

test("Cannot update rooms", async done => {
  await firebase.assertFails(doc.update({title: "test"}));
  done();
});

test("Cannot delete a room", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Users can read a room", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Users cannot read a room from another user", async done => {
  const ref = db.doc("users/other/rooms/roomId");
  await firebase.assertFails(ref.get());
  done();
});

test("Users can list their own rooms", async done => {
  await firebase.assertSucceeds(collection.get());
  done();
});

test("Cannot list rooms from other users", async done => {
  const ref = db.collection("users/other/rooms");
  await firebase.assertFails(ref.get());
  done();
});
