import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Activity from "@sentrei/common/models/Activity";

import {activitySpaceResponseUpdated} from "@sentrei/functions/__dummy__/Activity";

import actionCategorySet from "../actionCategorySet";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add action category", async done => {
  const snap = {
    data: (): Activity.Response => activitySpaceResponseUpdated,
  };

  const expected = {
    updated_spaces: 1,
  };

  spyOn(db.doc(""), "set").and.returnValue(true);

  const wrapped = testEnv.wrap(actionCategorySet);
  const req = await wrapped(snap);

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("actions/spaceUser");
  expect(db.doc("").set).toHaveBeenCalledWith(expected, {merge: true});
  done();
});
