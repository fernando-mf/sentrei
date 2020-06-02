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
  db = initializeFirebaseApp({uid: "testUser"});
  collection = db.collection("users");
  doc = collection.doc("testUser");
  await loadFirestoreRules();
  await admin.doc("users/testUser").set({
    role: "viewer",
  });
  await admin.doc("users/otherTestUser").set({bio: "other"});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Users can read their own data", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Users cannot read data from others", async done => {
  const ref = db.doc("users/otherTestUser");
  await firebase.assertFails(ref.get());
  done();
});

test("Users can update their own data", async done => {
  await firebase.assertSucceeds(doc.update({notifications: 0}));
  done();
});

test("Users cannot update data from others", async done => {
  const ref = db.doc("users/otherTestUser");
  await firebase.assertFails(ref.update({notifications: 0}));
  done();
});

test("Cannot delete an item", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Cannot change the name field", async done => {
  await firebase.assertFails(doc.update({name: "my name"}));
  done();
});

test("Cannot change the role field", async done => {
  await firebase.assertFails(doc.update({role: "moderator"}));
  await firebase.assertFails(doc.update({role: "admin"}));
  done();
});

test("Cannot change the username field", async done => {
  await firebase.assertFails(doc.update({username: "new"}));
  done();
});
