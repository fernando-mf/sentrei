import * as firebase from "@firebase/testing";

import {profileResponse} from "../../__dummy__/Profile";
import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let ref: firebase.firestore.DocumentReference;

// const profileResponse = {
//   name: "name",
//   photo: "user.png",
//   username: "username",
// };

const data = {
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  createdBy: profileResponse,
  createdById: "currentUser",
  description: "content",
  memberCount: 0,
  photo: null,
  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedBy: profileResponse,
  updatedById: "currentUser",
};

const edit = {
  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedBy: profileResponse,
  updatedById: "currentUser",
};

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "currentUser"});
  ref = db.doc("spaces/itemId");
  await loadFirestoreRules();
  await admin.doc("profileResponse/currentUser").set(profileResponse);
  await admin.doc("spaces/itemId").set(data);
  await admin.doc("users/currentUser/spaces/itemId").set({});
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("CreatedAt cannot be changed", async done => {
  const changes = {
    ...edit,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  await firebase.assertFails(ref.update(changes));
  done();
});

test("CreatedBy cannot be changed", async done => {
  await firebase.assertFails(ref.update({...edit, createdBy: "new"}));
  done();
});

test("CreatedById cannot be changed", async done => {
  await firebase.assertFails(ref.update({...edit, createdById: "other"}));
  done();
});

test("Members cannot be changed", async done => {
  await firebase.assertFails(ref.update({...edit, memberCount: 1}));
  done();
});

test("Photo is a string", async done => {
  await firebase.assertSucceeds(ref.update({...edit, photo: "photo.svg"}));
  await firebase.assertFails(ref.update({...edit, photo: 123}));
  await firebase.assertFails(ref.update({...edit, photo: true}));
  await firebase.assertFails(ref.update({...edit, photo: {1: true}}));
  await firebase.assertFails(ref.update({...edit, photo: ["test"]}));
  done();
});

test("Photo can be null", async done => {
  await firebase.assertSucceeds(ref.update({...edit, photo: null}));
  done();
});

test("UpdatedAt has a valid timestamp", async done => {
  await firebase.assertFails(ref.update({...edit, updatedAt: "today"}));
  await firebase.assertFails(ref.update({...edit, updatedAt: new Date()}));
  done();
});

test("UpdatedBy has a valid user name", async done => {
  const updatedBy = {...profileResponse, name: "invalid"};
  await firebase.assertFails(ref.update({...edit, updatedBy}));
  done();
});

test("UpdatedBy has a valid user photo", async done => {
  const updatedBy = {...profileResponse, photo: "invalid"};
  await firebase.assertFails(ref.update({...edit, updatedBy}));
  done();
});

test("UpdatedBy has a valid username", async done => {
  const updatedBy = {...profileResponse, username: "invalid"};
  await firebase.assertFails(ref.update({...edit, updatedBy}));
  done();
});

test("UpdatedById has the current user UID", async done => {
  await firebase.assertFails(ref.update({...edit, updatedById: "other"}));
  done();
});
