/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";
import {when} from "jest-when";

import activityBatchSet from "../activityBatchSet";

const testEnv = functions();
const db = admin.firestore();

test("do not send a request to update when an item was deleted", async done => {
  const data = {
    action: "deleted",
  };
  const snap = {
    data: (): {
      action: string;
    } => data,
  };
  const wrapped = testEnv.wrap(activityBatchSet);
  const req = await wrapped(snap);

  expect(req).toBe(false);
  expect(db.batch).not.toHaveBeenCalled();
  done();
});

test("send a request to update the updatedAt field", async done => {
  spyOn(db.batch(), "commit").and.returnValue(true);
  when(db.doc as any)
    .calledWith("spaces/space1")
    .mockReturnValue("space1Ref")
    .calledWith("spaces/space2")
    .mockReturnValue("space2Ref");

  const data = {
    createdById: "editorId",
    spaces: ["space1", "space2"],
    updatedAt: "today",
    user: {name: "user"},
  };
  const snap = {
    data: (): {
      createdById: string;
      spaces: string[];
      updatedAt: string;
      user: {
        name: string;
      };
    } => data,
  };
  const wrapped = testEnv.wrap(activityBatchSet);
  const req = await wrapped(snap);
  const expected = {
    updatedAt: "today",
    updatedBy: {name: "user"},
    updatedById: "editorId",
  };

  expect(req).toBe(true);
  expect(db.doc).toHaveBeenCalledWith("spaces/space1");
  expect(db.doc).toHaveBeenCalledWith("spaces/space2");
  expect(db.batch().set).toHaveBeenCalledWith("space1Ref", expected, {
    merge: true,
  });
  expect(db.batch().set).toHaveBeenCalledWith("space2Ref", expected, {
    merge: true,
  });
  done();
});
