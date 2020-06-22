import * as firebase from "@firebase/testing";

import User from "@sentrei/common/models/User";

import {username} from "../__dummy__/Username";
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
  db = initializeFirebaseApp(username);
  collection = db.collection("users");
  doc = collection.doc("userId");
  await loadFirestoreRules();
  await admin.doc("users/userId").set(<User.Update>{
    role: "viewer",
  });
  await admin.doc("users/otherUserId").set(<User.Update>{name: "other"});
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
  const ref = db.doc("users/otherUserId");
  await firebase.assertFails(ref.get());
  done();
});

test("Users can update their own data", async done => {
  await firebase.assertSucceeds(doc.update(<User.Update>{notifications: 0}));
  done();
});

test("Users cannot update data from others", async done => {
  const ref = db.doc("users/otherUserId");
  await firebase.assertFails(ref.update(<User.Update>{notifications: 0}));
  done();
});

test("Cannot delete an item", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Cannot change the name field", async done => {
  await firebase.assertFails(doc.update(<User.Update>{name: "name"}));
  done();
});

test("Cannot change the role field", async done => {
  await firebase.assertFails(doc.update(<User.Update>{role: "moderator"}));
  await firebase.assertFails(doc.update(<User.Update>{role: "admin"}));
  done();
});

test("Cannot change the username field", async done => {
  await firebase.assertFails(doc.update(<User.Update>{username: "new"}));
  done();
});
