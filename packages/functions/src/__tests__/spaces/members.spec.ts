import * as firebase from "@firebase/testing";

import Username from "@sentrei/common/models/Username";

import {profileResponse} from "../../__dummy__/Profile";
import {timestamp} from "../../__mocks__/firebase-testing";
import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let ref: firebase.firestore.DocumentReference;

const data = {...profileResponse, timestamp, score: 1};

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp(<Username>{uid: "spaceUserId"});
  ref = db.doc("spaces/spaceId/members/spaceUserId");
  await loadFirestoreRules();
  await admin.doc("profiles/spaceUserId").set(profileResponse);
  await admin.doc("profiles/otherUserId").set(profileResponse);
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
  await admin.doc("spaces/spaceId/members/spaceUserId").delete();
  await firebase.assertSucceeds(ref.set(data));
  done();
});

test("Cannot join a space using a fake UID", async done => {
  const docRef = db.doc("spaces/spaceId/members/otherUserId");
  await admin.doc("spaces/spaceId/members/otherUserId").delete();
  await firebase.assertFails(docRef.set(data));
  done();
});

test("Users can leave a space", async done => {
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Cannot leave a space using a fake UID", async done => {
  const docRef = db.doc("spaces/spaceId/members/otherUserId");
  await firebase.assertFails(docRef.delete());
  done();
});

test("Cannot update", async done => {
  await admin.doc("spaces/spaceId/members/spaceUserId").set(data);
  await firebase.assertFails(ref.update({timestamp}));
  done();
});
