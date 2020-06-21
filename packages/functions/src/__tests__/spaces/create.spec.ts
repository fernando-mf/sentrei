import * as firebase from "@firebase/testing";

import {profileResponse} from "../../__dummy__/Profile";
import {spaceResponse} from "../../__dummy__/Space";
import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let ref: firebase.firestore.CollectionReference;

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp({uid: "currentUser"});
  ref = db.collection("spaces");
  await loadFirestoreRules();
  await admin.doc("profiles/currentUser").set(profileResponse);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Authenticated users can create", async done => {
  await firebase.assertSucceeds(ref.add(spaceResponse));
  done();
});

test("Anonymous users cannot create", async done => {
  const app = initializeFirebaseApp(undefined);
  const newRef = app.collection("spaces");
  await firebase.assertFails(newRef.add(spaceResponse));
  done();
});

test("CreatedAt has a valid timestamp", async done => {
  await firebase.assertFails(
    ref.add({...spaceResponse, createdAt: "1452-10-01"}),
  );
  await firebase.assertFails(
    ref.add({...spaceResponse, createdAt: new Date()}),
  );
  done();
});

test("CreatedBy has a valid user name", async done => {
  const createdBy = {...profileResponse, name: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, createdBy}));
  done();
});

test("CreatedBy has a valid user photo", async done => {
  const createdBy = {...profileResponse, photo: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, createdBy}));
  done();
});

test("CreatedBy has a valid username", async done => {
  const createdBy = {...profileResponse, username: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, createdBy}));
  done();
});

test("CreatedById has the current user UID", async done => {
  await firebase.assertFails(ref.add({...spaceResponse, createdById: "other"}));
  done();
});

test("MemberCount is set to 0", async done => {
  await firebase.assertFails(ref.add({...spaceResponse, memberCount: 1}));
  done();
});

test("Photo is a string", async done => {
  await firebase.assertSucceeds(
    ref.add({...spaceResponse, photo: "photo.svg"}),
  );
  await firebase.assertFails(ref.add({...spaceResponse, photo: 123}));
  await firebase.assertFails(ref.add({...spaceResponse, photo: true}));
  await firebase.assertFails(ref.add({...spaceResponse, photo: {1: true}}));
  await firebase.assertFails(ref.add({...spaceResponse, photo: ["test"]}));
  done();
});

test("Photo can be null", async done => {
  await firebase.assertSucceeds(ref.add({...spaceResponse, photo: null}));
  done();
});

test("UpdatedAt has a valid timestamp", async done => {
  await firebase.assertFails(
    ref.add({...spaceResponse, updatedAt: "1452-10-01"}),
  );
  await firebase.assertFails(
    ref.add({...spaceResponse, updatedAt: new Date()}),
  );
  done();
});

test("UpdatedBy has a valid user name", async done => {
  const updatedBy = {...profileResponse, name: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, updatedBy}));
  done();
});

test("UpdatedBy has a valid user photo", async done => {
  const updatedBy = {...profileResponse, photo: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, updatedBy}));
  done();
});

test("UpdatedBy has a valid username", async done => {
  const updatedBy = {...profileResponse, username: "invalid"};
  await firebase.assertFails(ref.add({...spaceResponse, updatedBy}));
  done();
});

test("UpdatedById has the current user UID", async done => {
  await firebase.assertFails(ref.add({...spaceResponse, updatedById: "other"}));
  done();
});
