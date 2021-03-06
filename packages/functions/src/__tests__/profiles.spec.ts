import * as firebase from "@firebase/testing";

import Profile from "@sentrei/common/models/Profile";
import Username from "@sentrei/common/models/Username";

import {profileResponse} from "../__dummy__/Profile";
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
  db = initializeFirebaseApp(<Username>{...username, uid: "profileId"});
  collection = db.collection("profiles");
  doc = collection.doc("profileId");
  await loadFirestoreRules();
  await admin.doc("profiles/profileId").set(profileResponse);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Cannot create", async done => {
  await firebase.assertFails(collection.add(<Profile.Update>{name: "new"}));
  done();
});

test("Users can update their own data", async done => {
  await firebase.assertSucceeds(doc.update(<Profile.Update>{name: "current"}));
  done();
});

test("Cannot update data from other users", async done => {
  const ref = db.doc("profiles/otherProfileId");
  await admin
    .doc("profiles/otherProfileId")
    .set(<Profile.Update>{name: "other"});
  await firebase.assertFails(ref.update(<Profile.Update>{name: "changed"}));
  done();
});

test("Cannot update the username field", async done => {
  await firebase.assertFails(doc.update(<Profile.Update>{username: "new"}));
  done();
});

test("Cannot delete", async done => {
  await firebase.assertFails(doc.delete());
  done();
});

test("Can read an item", async done => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test("Can list one item", async done => {
  await firebase.assertSucceeds(collection.limit(1).get());
  done();
});

test("Cannot list more than one item", async done => {
  await firebase.assertFails(collection.limit(2).get());
  done();
});
