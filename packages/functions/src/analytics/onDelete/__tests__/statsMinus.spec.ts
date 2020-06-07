/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import statsMinus from "../statsMinus";

const testEnv = functions();
const db = admin.firestore();

beforeAll(() => {
  spyOn(db.doc(""), "update").and.returnValue("updated");
});

test("Do not update untracked collections on activity", async done => {
  const context = {params: {collection: "activity"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe(false);
  done();
});

test("Decrease the profiles count", async done => {
  const context = {params: {collection: "profiles"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({profiles: -1});
  done();
});

test("Decrease the notifications count", async done => {
  const context = {params: {collection: "notifications"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({notifications: -1});
  done();
});

test("Decrease the spaces count", async done => {
  const context = {params: {collection: "spaces"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({spaces: -1});
  done();
});

test("Decrease the users count", async done => {
  const context = {params: {collection: "users"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({users: -1});
  done();
});

test("Decrease the usernames count", async done => {
  const context = {params: {collection: "usernames"}};
  const wrapped = testEnv.wrap(statsMinus);
  const req = await wrapped({}, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("analytics/stats");
  expect(db.doc("").update).toHaveBeenCalledWith({usernames: -1});
  done();
});
