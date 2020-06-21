import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Space from "@sentrei/common/models/Space";

import {activitySpaceResponseUpdated} from "../../../__dummy__/Activity";
import {spaceResponse} from "../../../__dummy__/Space";

import activitySpaceUpdate from "../activitySpaceUpdate";

const testEnv = functions();
const db = admin.firestore();

test("Return when there are no changes", async done => {
  const after = {
    data: (): Space.Response => spaceResponse,
  };
  const before = {
    data: (): Space.Response => spaceResponse,
  };
  const changes = {after, before};
  const context = {params: {id: "spaceId"}};

  const wrapped = testEnv.wrap(activitySpaceUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(false);
  expect(db.doc).not.toHaveBeenCalled();
  expect(db.collection).not.toHaveBeenCalled();
  done();
});

test("Send a request to add a new item to activities", async done => {
  const afterData = {
    ...spaceResponse,
    description: "new",
    photo: "new.png",
  };
  const beforeData = {
    ...spaceResponse,
    description: "old",
    photo: "old.jpg",
  };
  const after = {
    data: (): Space.Response => afterData,
  };
  const before = {
    data: (): Space.Response => beforeData,
  };

  const changes = {after, before};
  const context = {params: {id: "spaceId"}};
  const expected = {
    ...activitySpaceResponseUpdated,
    after: afterData,
    before: beforeData,
  };

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activitySpaceUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(expected);
  done();
});
