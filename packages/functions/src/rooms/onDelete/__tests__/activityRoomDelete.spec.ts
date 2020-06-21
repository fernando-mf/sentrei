import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Room from "@sentrei/common/models/Room";

import {activityRoomResponseDeleted} from "../../../__dummy__/Activity";
import {roomResponse} from "../../../__dummy__/Room";
import activityRoomDelete from "../activityRoomDelete";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add a new delete to activities", async done => {
  const snap = {
    data: (): Room.Response => roomResponse,
  };
  const context = {params: {id: "roomId"}};

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activityRoomDelete);
  const req = await wrapped(snap, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(
    activityRoomResponseDeleted,
  );
  done();
});
