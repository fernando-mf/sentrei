import * as firebase from "@firebase/testing";

import {
  initializeFirebaseApp,
  loadFirestoreRules,
  removeApps,
} from "../../helpers/testHelpers";

let db: firebase.firestore.Firestore;

beforeAll(async done => {
  db = initializeFirebaseApp(undefined);
  await loadFirestoreRules();
  done();
});

afterAll(async done => {
  await removeApps();
  done();
});

test("Can get a single item", async done => {
  const ref = db.doc("spaces/spaceId");
  await firebase.assertSucceeds(ref.get());
  done();
});

test("Can list items", async done => {
  const ref = db.collection("spaces").limit(20);
  await firebase.assertSucceeds(ref.get());
  done();
});

test("Cannot list more than 20 items", async done => {
  const ref = db.collection("spaces").limit(21);
  await firebase.assertFails(ref.get());
  done();
});
