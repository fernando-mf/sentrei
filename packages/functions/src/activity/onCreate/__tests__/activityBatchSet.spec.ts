import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import Activity from "@sentrei/common/models/Activity";

import {
  activitySpaceResponseDeleted,
  activitySpaceResponseUpdated,
} from "@sentrei/functions/__dummy__/Activity";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {firestore} from "../../../__mocks__/firebase-admin";

import activityBatchSet from "../activityBatchSet";

const testEnv = functions();
const db = admin.firestore();

test("Do not send a request to update when an item was deleted", async done => {
  const snap = {
    data: (): Activity.Response => activitySpaceResponseDeleted,
  };
  const wrapped = testEnv.wrap(activityBatchSet);
  const req = await wrapped(snap);

  expect(req).toBe(false);
  expect(db.batch).not.toHaveBeenCalled();
  done();
});

test("Send a request to update the updatedAt field", async done => {
  spyOn(db.batch(), "commit").and.returnValue(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when(db.doc as any)
    .calledWith("spaces/space")
    .mockReturnValue("spaceRef");

  const snap = {
    data: (): Activity.Response => activitySpaceResponseUpdated,
  };
  const wrapped = testEnv.wrap(activityBatchSet);
  const req = await wrapped(snap);
  const expected = {
    updatedAt: firestore.Timestamp,
    updatedBy: profileGet,
    updatedById: "editorId",
  };

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("spaces/space");
  expect(db.batch().set).toHaveBeenCalledWith("spaceRef", expected, {
    merge: true,
  });
  done();
});
