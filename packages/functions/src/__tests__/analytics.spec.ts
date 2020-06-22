import * as firebase from "@firebase/testing";

import User from "@sentrei/common/models/User";
import Username from "@sentrei/common/models/Username";

import {analyticsStats} from "../__dummy__/Analytics";
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
  collection = db.collection("analytics");
  doc = collection.doc("stats");
  await loadFirestoreRules();
  await admin.doc("analytics/stats").set(analyticsStats);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot create an item", async done => {
  await firebase.assertFails(collection.add(analyticsStats));
  done();
});

test("Cannot update an item", async done => {
  await firebase.assertFails(doc.update(analyticsStats));
  done();
});

test("Cannot delete an item", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Can read with admin access", async done => {
  const adminApp = initializeFirebaseApp(<Username>{uid: "adminUser"});
  const adminDoc = adminApp.doc("analytics/stats");
  await admin.doc("users/adminUser").set(<User.Update>{role: "admin"});
  await firebase.assertSucceeds(adminDoc.get());
  done();
});

test("Cannot read with moderator access", async done => {
  const adminApp = initializeFirebaseApp(<Username>{uid: "modUser"});
  const adminDoc = adminApp.doc("analytics/stats");
  await admin.doc("users/modUser").set(<User.Update>{role: "moderator"});
  await firebase.assertFails(adminDoc.get());
  done();
});

test("Cannot read with viewer access", async done => {
  const adminApp = initializeFirebaseApp(<Username>{uid: "viewerUser"});
  const adminDoc = adminApp.doc("analytics/stats");
  await admin.doc("users/viewerUser").set(<User.Update>{role: "viewer"});
  await firebase.assertFails(adminDoc.get());
  done();
});

test("Cannot list items", async done => {
  await firebase.assertFails(collection.get());
  done();
});
