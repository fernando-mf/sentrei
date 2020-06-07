/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import statsPlus from "../statsPlus";

const testEnv = functions();
const db = admin.firestore();

beforeAll(() => {
  spyOn(db.doc(""), "update").and.returnValue("updated");
});

test("Do not update untracked collections on activity", async done => {
  const context = {params: {collection: "activity"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe(false);
  done();
});

test("Increase the profiles count", async done => {
  const context = {params: {collection: "profiles"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({profiles: 1});
  done();
});

test("Increase the notifications count", async done => {
  const context = {params: {collection: "notifications"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({notifications: 1});
  done();
});

test("Increase the spaces count", async done => {
  const context = {params: {collection: "spaces"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({spaces: 1});
  done();
});

test("Increase the users count", async done => {
  const context = {params: {collection: "users"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({users: 1});
  done();
});

test("Increase the usernames count", async done => {
  const context = {params: {collection: "usernames"}};
  const wrapped = testEnv.wrap(statsPlus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({usernames: 1});
  done();
});
