import * as firebase from "@firebase/testing";

import Profile from "@sentrei/common/models/Profile";
import Space from "@sentrei/common/models/Space";

import {profileGet} from "../../__dummy__/Profile";
import {spaceCreate} from "../../__dummy__/Space";
import {username} from "../../__dummy__/Username";

import {
  initializeAdminApp,
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let ref: firebase.firestore.CollectionReference;

const data: Space.Create = {
  ...spaceCreate,
  createdById: "userId",
  updatedById: "userId",
};

beforeAll(async done => {
  admin = initializeAdminApp();
  db = initializeFirebaseApp(username);
  ref = db.collection("spaces");
  await loadFirestoreRules();
  await admin.doc("profiles/userId").set(profileGet);
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Anonymous users cannot create", async done => {
  const app = initializeFirebaseApp(undefined);
  const newRef = app.collection("spaces");
  await firebase.assertFails(newRef.add(data));
  done();
});

test("CreatedAt has a valid timestamp", async done => {
  await firebase.assertFails(ref.add({...data, createdAt: "1452-10-01"}));
  await firebase.assertFails(ref.add({...data, createdAt: new Date()}));
  done();
});

test("CreatedBy has a valid user name", async done => {
  const createdBy: Profile.Get = {...profileGet, name: "invalid"};
  await firebase.assertFails(ref.add(<Space.Response>{...data, createdBy}));
  done();
});

test("CreatedBy has a valid user photo", async done => {
  const createdBy: Profile.Get = {...profileGet, photo: "invalid"};
  await firebase.assertFails(ref.add(<Space.Response>{...data, createdBy}));
  done();
});

test("CreatedBy has a valid username", async done => {
  const createdBy: Profile.Get = {...profileGet, username: "invalid"};
  await firebase.assertFails(ref.add(<Space.Response>{...data, createdBy}));
  done();
});

test("CreatedById has the current user UID", async done => {
  await firebase.assertFails(
    ref.add(<Space.Response>{...data, createdById: "other"}),
  );
  done();
});

test("MemberCount is set to 0", async done => {
  await firebase.assertFails(
    ref.add(<Space.Response>{...data, memberCount: 1}),
  );
  done();
});

test("Photo is a string", async done => {
  await firebase.assertFails(ref.add({...data, photo: 123}));
  await firebase.assertFails(ref.add({...data, photo: true}));
  await firebase.assertFails(ref.add({...data, photo: {1: true}}));
  await firebase.assertFails(ref.add({...data, photo: ["test"]}));
  done();
});

test("UpdatedAt has a valid timestamp", async done => {
  await firebase.assertFails(ref.add({...data, updatedAt: "1452-10-01"}));
  await firebase.assertFails(ref.add({...data, updatedAt: new Date()}));
  done();
});

test("UpdatedBy has a valid user name", async done => {
  const updatedBy: Profile.Get = {...profileGet, name: "invalid"};
  await firebase.assertFails(ref.add({...data, updatedBy}));
  done();
});

test("UpdatedBy has a valid user photo", async done => {
  const updatedBy: Profile.Get = {...profileGet, photo: "invalid"};
  await firebase.assertFails(ref.add({...data, updatedBy}));
  done();
});

test("UpdatedBy has a valid username", async done => {
  const updatedBy: Profile.Get = {...profileGet, username: "invalid"};
  await firebase.assertFails(ref.add({...data, updatedBy}));
  done();
});

test("UpdatedById has the current user UID", async done => {
  await firebase.assertFails(
    ref.add(<Space.Response>{...data, updatedById: "other"}),
  );
  done();
});
