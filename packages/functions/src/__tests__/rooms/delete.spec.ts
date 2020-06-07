import * as firebase from "@firebase/testing";

import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "roomUser"});
  await loadFirestoreRules();
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Viewers cannot delete", async done => {
  const ref = db.doc("rooms/viewerDoc");
  await admin.doc("users/roomUser").set({role: "viewer"});
  await admin.doc("rooms/viewerDoc").set({updatedById: "roomUser"});
  await firebase.assertFails(ref.delete());
  done();
});

test("Authors can delete", async done => {
  const data = {createdById: "roomUser", updatedById: "roomUser"};
  const ref = db.doc("rooms/authorDoc");
  await admin.doc("users/roomUser").set({role: "viewer"});
  await admin.doc("rooms/authorDoc").set(data);
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("UpdatedById has the current user UID", async done => {
  const data = {createdById: "roomUser", updatedById: "otherUser"};
  const ref = db.doc("rooms/otherUser");
  await admin.doc("users/roomUser").set({role: "viewer"});
  await admin.doc("rooms/otherUser").set(data);
  await firebase.assertFails(ref.delete());
  done();
});

test("Admins can delete", async done => {
  const ref = db.doc("rooms/adminDoc");
  await admin.doc("users/roomUser").set({role: "admin"});
  await admin.doc("rooms/adminDoc").set({updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Moderators can delete", async done => {
  const ref = db.doc("rooms/moderatorDoc");
  await admin.doc("users/roomUser").set({role: "moderator"});
  await admin.doc("rooms/moderatorDoc").set({updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});
