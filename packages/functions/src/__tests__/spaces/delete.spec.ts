import * as firebase from "@firebase/testing";

import Space from "@sentrei/common/models/Space";
import User from "@sentrei/common/models/User";
import Username from "@sentrei/common/models/Username";

import {spaceResponse} from "../../__dummy__/Space";
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
  db = initializeFirebaseApp(<Username>{uid: "spaceUser"});
  await loadFirestoreRules();
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Viewers cannot delete", async done => {
  const ref = db.doc("spaces/viewerDoc");
  await admin.doc("users/spaceUser").set(<User.Update>{role: "viewer"});
  await admin
    .doc("spaces/viewerDoc")
    .set(<Space.Update>{updatedById: "spaceUser"});
  await firebase.assertFails(ref.delete());
  done();
});

test("Authors can delete", async done => {
  const data: Space.Response = {
    ...spaceResponse,
    createdById: "spaceUser",
    updatedById: "spaceUser",
  };
  const ref = db.doc("spaces/authorDoc");
  await admin.doc("users/spaceUser").set(<User.Update>{role: "viewer"});
  await admin.doc("spaces/authorDoc").set(data);
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("UpdatedById has the current user UID", async done => {
  const data: Space.Response = {
    ...spaceResponse,
    createdById: "spaceUser",
    updatedById: "otherUser",
  };
  const ref = db.doc("spaces/otherUser");
  await admin.doc("users/spaceUser").set(<User.Update>{role: "viewer"});
  await admin.doc("spaces/otherUser").set(data);
  await firebase.assertFails(ref.delete());
  done();
});

test("Admins can delete", async done => {
  const ref = db.doc("spaces/adminDoc");
  await admin.doc("users/spaceUser").set(<User.Update>{role: "admin"});
  await admin
    .doc("spaces/adminDoc")
    .set(<Space.Update>{updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});

test("Moderators can delete", async done => {
  const ref = db.doc("spaces/moderatorDoc");
  await admin.doc("users/spaceUser").set(<User.Update>{role: "moderator"});
  await admin
    .doc("spaces/moderatorDoc")
    .set(<Space.Update>{updatedById: "otherUser"});
  await firebase.assertSucceeds(ref.delete());
  done();
});
