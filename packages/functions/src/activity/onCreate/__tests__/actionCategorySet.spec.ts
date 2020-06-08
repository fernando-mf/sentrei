/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import actionCategorySet from "../actionCategorySet";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add action category", async done => {
  const data = {
    action: "created",
    category: "space",
    createdById: "editorId",
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
    } => data,
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
