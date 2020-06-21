import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Room from "@sentrei/common/models/Room";

import {activityRoomResponseUpdated} from "../../../__dummy__/Activity";
import {roomResponse} from "../../../__dummy__/Room";

import activityRoomUpdate from "../activityRoomUpdate";

const testEnv = functions();
const db = admin.firestore();

test("Return when there are no changes", async done => {
  const after = {
    data: (): Room.Response => roomResponse,
  };
  const before = {
    data: (): Room.Response => roomResponse,
  };
  const changes = {after, before};
  const context = {params: {id: "roomId"}};

  const wrapped = testEnv.wrap(activityRoomUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(false);
  expect(db.doc).not.toHaveBeenCalled();
  expect(db.collection).not.toHaveBeenCalled();
  done();
});

test("Send a request to add a new item to activities", async done => {
  const afterData = {
    ...roomResponse,
    description: "new",
    photo: "new.png",
  };
  const beforeData = {
    ...roomResponse,
    description: "old",
    photo: "old.jpg",
  };
  const after = {
    data: (): Room.Response => afterData,
  };
  const before = {
    data: (): Room.Response => beforeData,
  };

  const changes = {after, before};
  const context = {params: {id: "roomId"}};
  const expected = {
    ...activityRoomResponseUpdated,
    after: afterData,
    before: beforeData,
  };

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activityRoomUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(expected);
  done();
});
