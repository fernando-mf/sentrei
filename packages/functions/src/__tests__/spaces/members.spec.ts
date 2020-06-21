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
  db = initializeFirebaseApp({uid: "spaceUser"});
  ref = db.doc("spaces/spaceId/members/spaceUser");
  await loadFirestoreRules();
  await admin.doc("profile/spaceUser").set(profile);
  await admin.doc("profile/otherUser").set(profile);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Can read", async done => {
  const docRef = db.doc("spaces/spaceId/members/random");
  await firebase.assertSucceeds(docRef.get());
  done();
});

test("Can list 30 users", async done => {
  const colRef = db.collection("spaces/spaceId/members");
  await firebase.assertSucceeds(colRef.limit(30).get());
  done();
});

test("Cannot list more than 30 users", async done => {
  const colRef = db.collection("spaces/spaceId/members");
  await firebase.assertFails(colRef.limit(31).get());
  done();
});

test("Users can join a space", async done => {
  await admin.doc("spaces/spaceId/members/spaceUser").delete();
  await firebase.assertSucceeds(ref.set(data));
  done();
});

test("Cannot join a space using a fake UID", async done => {
  const docRef = db.doc("spaces/spaceId/members/otherUser");
  await admin.doc("spaces/spaceId/members/otherUser").delete();
  await firebase.assertFails(docRef.set(data));
  done();
});

test("Users can leave a space", async done => {
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Cannot leave a space using a fake UID", async done => {
  const docRef = db.doc("spaces/spaceId/members/otherUser");
  await firebase.assertFails(docRef.delete());
  done();
});

test("Cannot update", async done => {
  await admin.doc("spaces/spaceId/members/spaceUser").set(data);
  await firebase.assertFails(ref.update({joined}));
  done();
});
