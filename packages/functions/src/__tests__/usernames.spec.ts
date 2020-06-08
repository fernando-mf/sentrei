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
  collection = db.collection("usernames");
  doc = collection.doc("zoonk");
  await loadFirestoreRules();
  await admin.doc("usernames/zoonk").set({uid: "otherUser"});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Can read a single username", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Cannot list usernames", async done => {
  await firebase.assertFails(collection.get());
  done();
});

test("Can create", async done => {
  const ref = collection.doc("newuser");
  await firebase.assertSucceeds(ref.set({uid: "currentUser"}));
  done();
});

test("Anonymous users cannot create", async done => {
  const app = initializeFirebaseApp(undefined);
  const ref = app.collection("usernames");
  await firebase.assertFails(ref.add({uid: null}));
  done();
});

test("Cannot create using the UID of other users", async done => {
  await firebase.assertFails(collection.add({uid: "otherUser"}));
  done();
});

test("Cannot have a dot (.) at the beginning", async done => {
  const ref = collection.doc(".myuser");
  await firebase.assertFails(ref.set({uid: "currentUser"}));
  done();
});

test("Cannot have a dot (.) at the end", async done => {
  const ref = collection.doc("myuser.");
  await firebase.assertFails(ref.set({uid: "currentUser"}));
  done();
});

test("Cannot have two dots (..) in a row", async done => {
  const ref = collection.doc("my..user");
  await firebase.assertFails(ref.set({uid: "currentUser"}));
  done();
});

test("Cannot have an underscore (_) at the beginning", async done => {
  const ref = collection.doc("_myuser");
  await firebase.assertFails(ref.set({uid: "currentUser"}));
  done();
});

test("Cannot have uppercase characters", async done => {
  const start = collection.doc("Myuser");
  const middle = collection.doc("myUser");
  const end = collection.doc("myuseR");
  await firebase.assertFails(start.set({uid: "currentUser"}));
  await firebase.assertFails(middle.set({uid: "currentUser"}));
  await firebase.assertFails(end.set({uid: "currentUser"}));
  done();
});

test("Can have numbers", async done => {
  const ref = collection.doc("myuser89");
  await firebase.assertSucceeds(ref.set({uid: "currentUser"}));
  done();
});

test("Cannot have special characters", async done => {
  const comma = collection.doc("u,ser");
  const cedil = collection.doc("testças");
  const til = collection.doc("anão");
  const exclamation = collection.doc("test!");
  const question = collection.doc("test?");
  await firebase.assertFails(comma.set({uid: "currentUser"}));
  await firebase.assertFails(cedil.set({uid: "currentUser"}));
  await firebase.assertFails(til.set({uid: "currentUser"}));
  await firebase.assertFails(exclamation.set({uid: "currentUser"}));
  await firebase.assertFails(question.set({uid: "currentUser"}));
  done();
});

test("Cannot update using the UID of other users", async done => {
  await firebase.assertFails(doc.update({uid: "otherUser"}));
  done();
});

test("Cannot delete", async done => {
  await firebase.assertFails(doc.delete());
  done();
});