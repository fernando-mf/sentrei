import * as firebase from "@firebase/testing";

import Username from "@sentrei/common/models/Username";

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
  db = initializeFirebaseApp(<Username>{uid: "userId"});
  collection = db.collection("users/userId/spaces");
  doc = collection.doc("spaceId");
  await loadFirestoreRules();
  await admin.doc("users/userId/spaces/spaceId").set({});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot add a new space", async done => {
  await firebase.assertFails(collection.add({title: "test"}));
  done();
});

test("Cannot update spaces", async done => {
  await firebase.assertFails(doc.update({title: "test"}));
  done();
});

test("Cannot delete a space", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Users can read a space", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Users cannot read a space from another user", async done => {
  const ref = db.doc("users/otherUserId/spaces/spaceId");
  await firebase.assertFails(ref.get());
  done();
});

test("Users can list their own spaces", async done => {
  await firebase.assertSucceeds(collection.get());
  done();
});

test("Cannot list spaces from other users", async done => {
  const ref = db.collection("users/otherUserId/spaces");
  await firebase.assertFails(ref.get());
  done();
});
