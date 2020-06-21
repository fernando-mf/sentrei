import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Space from "@sentrei/common/models/Space";

import {activityRoomResponseCreated} from "../../../__dummy__/Activity";
import {spaceResponse} from "../../../__dummy__/Space";
import activitySpaceCreate from "../activitySpaceCreate";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add a new space to activities", async done => {
  const snap = {
    data: (): Space.Response => spaceResponse,
  };
  const context = {params: {id: "spaceId"}};

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activitySpaceCreate);
  const req = await wrapped(snap, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(
    activityRoomResponseCreated,
  );
  done();
});
