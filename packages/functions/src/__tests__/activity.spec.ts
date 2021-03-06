import * as firebase from "@firebase/testing";

import {
  activitySpaceResponseCreated,
  activitySpaceResponseUpdated,
} from "../__dummy__/Activity";
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
  collection = db.collection("activity");
  doc = collection.doc("activityId");
  await loadFirestoreRules();
  await admin.doc("activity/activityId").set(activitySpaceResponseCreated);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot create a new activity", async done => {
  await firebase.assertFails(collection.add(activitySpaceResponseCreated));
  done();
});

test("Cannot update activity", async done => {
  await firebase.assertFails(doc.update(activitySpaceResponseUpdated));
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
  const ref = collection.limit(30);
  await firebase.assertSucceeds(ref.get());
  done();
});

test("Cannot list more than 30 activities", async done => {
  const ref = collection.limit(31);
  await firebase.assertFails(ref.get());
  done();
});
