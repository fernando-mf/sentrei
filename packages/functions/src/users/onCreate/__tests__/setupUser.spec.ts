/* eslint-disable @typescript-eslint/no-explicit-any */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import setupUser from "../setupUser";

const testEnv = functions();

const db = admin.firestore();

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  when(db.doc as any)
    .calledWith("users/testUID")
    .mockReturnValue({path: "users/testUID"})
    .calledWith("profiles/testUID")
    .mockReturnValue({path: "profiles/testUID"});
});

test("Add the user info to their settings", async done => {
  const spy = spyOn(db.batch(), "set");
  const ref = db.doc("users/testUID");

  const wrapped = testEnv.wrap(setupUser);
  await wrapped({email: "test@test.com", uid: "testUID"});

  const userInfo = {
    name: "test",
    role: "viewer",
    username: "testUID",
  };

  expect(spy).toHaveBeenCalledWith(ref, userInfo, {merge: true});
  done();
});

test("Add the user info to their profile", async done => {
  const spy = spyOn(db.batch(), "set");
  const ref = db.doc("profiles/testUID");

  const wrapped = testEnv.wrap(setupUser);
  await wrapped({
    displayName: "user name",
    email: "test@test.com",
    uid: "testUID",
  });

  const userInfo = {
    name: "user name",
    username: "testUID",
  };

  expect(spy).toHaveBeenCalledWith(ref, userInfo, {merge: true});
  done();
});

test("Commit all changes to the database", async done => {
  const setSpy = spyOn(db.batch(), "set");
  spyOn(db.batch(), "commit").and.returnValue(true);

  const wrapped = testEnv.wrap(setupUser);
  const req = await wrapped({email: "test@test.com", uid: "testUID"});

  expect(setSpy).toHaveBeenCalledTimes(2);
  expect(req).toBe(true);
  done();
});
