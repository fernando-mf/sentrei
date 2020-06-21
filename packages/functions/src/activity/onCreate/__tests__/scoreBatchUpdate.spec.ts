import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import Activity from "@sentrei/common/models/Activity";
import {
  activitySpaceResponseCreated,
  activitySpaceResponseDeleted,
  activitySpaceResponseUpdated,
} from "@sentrei/functions/__dummy__/Activity";

import scoreActions from "../../../helpers/scoreActions";
import scoreBatchUpdate from "../scoreBatchUpdate";

const testEnv = functions();
const db = admin.firestore();
const batch = db.batch();
const merge = true;

beforeEach(() => {
  jest.clearAllMocks();
  spyOn(batch, "commit").and.returnValue(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  when(db.doc as any)
    .calledWith("spaces/spaceId/leaderboard/userId")
    .mockReturnValue("space1Ref");
});

test("Increase score when a space is created", async done => {
  const snap = {
    data: (): Activity.Response => activitySpaceResponseCreated,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", score: scoreActions.created_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(1);
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  done();
});

test("Increase score when a space is updated", async done => {
  const snap = {
    data: (): Activity.Response => activitySpaceResponseUpdated,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", score: scoreActions.updated_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(1);
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  done();
});

test("Decrease score when a space is deleted", async done => {
  const snap = {
    data: (): Activity.Response => activitySpaceResponseDeleted,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", score: scoreActions.deleted_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(1);
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  done();
});
