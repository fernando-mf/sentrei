import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import {profileResponse} from "../../../__dummy__/Profile";
import {userResponse} from "../../../__dummy__/User";
import userBatchSet from "../userBatchSet";

const testEnv = functions();

const db = admin.firestore();

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when(db.doc as any)
    .calledWith("users/userId")
    .mockReturnValue({path: "users/userId"})
    .calledWith("profiles/userId")
    .mockReturnValue({path: "profiles/userId"});
});

test("Add the user info to their settings", async done => {
  const spy = spyOn(db.batch(), "set");
  const ref = db.doc("users/userId");

  const wrapped = testEnv.wrap(userBatchSet);
  await wrapped({email: "user@sentrei.com", uid: "userId"});

  expect(spy).toHaveBeenCalledWith(ref, userResponse, {merge: true});
  done();
});

test("Add the user info to their profile", async done => {
  const spy = spyOn(db.batch(), "set");
  const ref = db.doc("profiles/userId");

  const wrapped = testEnv.wrap(userBatchSet);
  await wrapped({
    displayName: "user name",
    email: "test@test.com",
    photoURL: "photo.png",
    uid: "userId",
  });

  expect(spy).toHaveBeenCalledWith(ref, profileResponse, {merge: true});
  done();
});

test("On users create, batch commit all set changes to the database", async done => {
  const setSpy = spyOn(db.batch(), "set");
  spyOn(db.batch(), "commit").and.returnValue(true);

  const wrapped = testEnv.wrap(userBatchSet);
  const req = await wrapped({email: "user@sentrei.com", uid: "userId"});

  expect(setSpy).toHaveBeenCalledTimes(2);
  expect(req).toBe(true);
  done();
});
