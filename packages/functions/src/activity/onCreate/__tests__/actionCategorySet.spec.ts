/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Activity from "@sentrei/common/models/Activity";

import actionCategorySet from "../actionCategorySet";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add action category", async done => {
  const data: Activity.Response = {
    action: "created",
    category: "spaces",
    createdById: "editorId",
  };

  const snap = {
    data: (): Activity.Response => data,
  };

  const expected = {
    created_space: 1,
  };

  spyOn(db.doc(""), "set").and.returnValue(true);

  const wrapped = testEnv.wrap(actionCategorySet);
  const req = await wrapped(snap);

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("actions/editorId");
  expect(db.doc("").set).toHaveBeenCalledWith(expected, {merge: true});
  done();
});
