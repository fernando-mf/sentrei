import * as firebase from "@firebase/testing";

import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let ref: firebase.firestore.DocumentReference;
const joined = firebase.firestore.FieldValue.serverTimestamp();
const profile = {
  name: "leo",
  photo: "pic.png",
  username: "test",
  bio: "test",
};
const data = {...profile, joined, score: 1};

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "roomUser"});
  ref = db.doc("rooms/roomId/members/roomUser");
  await loadFirestoreRules();
  await admin.doc("profile/roomUser").set(profile);
  await admin.doc("profile/otherUserId").set(profile);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Can read", async done => {
  const docRef = db.doc("rooms/roomId/members/random");
  await firebase.assertSucceeds(docRef.get());
  done();
});

test("Can list 30 users", async done => {
  const colRef = db.collection("rooms/roomId/members");
  await firebase.assertSucceeds(colRef.limit(30).get());
  done();
});

test("Cannot list more than 30 users", async done => {
  const colRef = db.collection("rooms/roomId/members");
  await firebase.assertFails(colRef.limit(31).get());
  done();
});

test("Users can join a room", async done => {
  await admin.doc("rooms/roomId/members/roomUser").delete();
  await firebase.assertSucceeds(ref.set(data));
  done();
});

test("Cannot join a room using a fake UID", async done => {
  const docRef = db.doc("rooms/roomId/members/otherUserId");
  await admin.doc("rooms/roomId/members/otherUserId").delete();
  await firebase.assertFails(docRef.set(data));
  done();
});

test("Users can leave a room", async done => {
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Cannot leave a room using a fake UID", async done => {
  const docRef = db.doc("rooms/roomId/members/otherUserId");
  await firebase.assertFails(docRef.delete());
  done();
});

test("Cannot update", async done => {
  await admin.doc("rooms/roomId/members/roomUser").set(data);
  await firebase.assertFails(ref.update({joined}));
  done();
});
