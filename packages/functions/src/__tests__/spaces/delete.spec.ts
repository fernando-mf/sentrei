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
  db = initializeFirebaseApp({uid: "spaceUser"});
  await loadFirestoreRules();
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Viewers cannot delete", async done => {
  const ref = db.doc("spaces/viewerDoc");
  await admin.doc("users/spaceUser").set({role: "viewer"});
  await admin.doc("spaces/viewerDoc").set({updatedById: "spaceUser"});
  await firebase.assertFails(ref.delete());
  done();
});

test("Authors can delete", async done => {
  const data = {createdById: "spaceUser", updatedById: "spaceUser"};
  const ref = db.doc("spaces/authorDoc");
  await admin.doc("users/spaceUser").set({role: "viewer"});
  await admin.doc("spaces/authorDoc").set(data);
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("UpdatedById has the current user UID", async done => {
  const data = {createdById: "spaceUser", updatedById: "otherUser"};
  const ref = db.doc("spaces/otherUser");
  await admin.doc("users/spaceUser").set({role: "viewer"});
  await admin.doc("spaces/otherUser").set(data);
  await firebase.assertFails(ref.delete());
  done();
});

test("Admins can delete", async done => {
  const ref = db.doc("spaces/adminDoc");
  await admin.doc("users/spaceUser").set({role: "admin"});
  await admin.doc("spaces/adminDoc").set({updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Moderators can delete", async done => {
  const ref = db.doc("spaces/moderatorDoc");
  await admin.doc("users/spaceUser").set({role: "moderator"});
  await admin.doc("spaces/moderatorDoc").set({updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});
