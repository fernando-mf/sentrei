/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import scoreActions from "../../../helpers/scoreActions";
import scoreBatchUpdate from "../scoreBatchUpdate";

const testEnv = functions();
const db = admin.firestore();
const batch = db.batch();
const merge = true;

beforeEach(() => {
  jest.clearAllMocks();
  spyOn(batch, "commit").and.returnValue(true);
  when(db.doc as any)
    .calledWith("leaderboard/userId")
    .mockReturnValue("userRef");
  when(db.doc as any)
    .calledWith("spaces/1/leaderboard/userId")
    .mockReturnValue("space1Ref");
  when(db.doc as any)
    .calledWith("spaces/2/leaderboard/userId")
    .mockReturnValue("space2Ref");
  when(db.doc as any)
    .calledWith("spaces/spaceId/followers/userId")
    .mockReturnValue("spaceRef");
});

test("Increase score when a space is created", async done => {
  const data = {
    action: "created",
    category: "spaces",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: scoreActions.created_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Increase score when a space is edited", async done => {
  const data = {
    action: "updated",
    category: "spaces",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: scoreActions.updated_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Increase score when a space is deleted", async done => {
  const data = {
    action: "deleted",
    category: "spaces",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: scoreActions.deleted_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Decrease score when a space is deleted by the author", async done => {
  const data = {
    action: "deleted",
    before: {createdById: "userId"},
    category: "chapters",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: -scoreActions.created_spaces};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Increase score for an unknown created action", async done => {
  const data = {
    action: "created",
    category: "unknown",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: 1};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Increase score for an unknown updated action", async done => {
  const data = {
    action: "updated",
    category: "unknown",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: 1};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Increase score for an unknown deleted action", async done => {
  const data = {
    action: "deleted",
    category: "unknown",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: 1};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});

test("Decrease score for an unknown deleted action by the author", async done => {
  const data = {
    action: "deleted",
    before: {createdById: "userId"},
    category: "unknown",
    createdById: "userId",
    spaces: ["1", "2"],
  };
  const snap = {
    data: (): {
      action: string;
      before: {
        createdById: string;
      };
      category: string;
      createdById: string;
      spaces: string[];
    } => data,
  };
  const wrapped = testEnv.wrap(scoreBatchUpdate);
  const req = await wrapped(snap);
  const payload = {createdById: "userId", xp: -1};

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/1/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledWith("spaces/2/leaderboard/userId");
  expect(db.doc).toHaveBeenCalledTimes(3);
  expect(batch.set).toHaveBeenCalledWith("userRef", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space1Ref", payload, {merge});
  expect(batch.set).toHaveBeenCalledWith("space2Ref", payload, {merge});
  done();
});
