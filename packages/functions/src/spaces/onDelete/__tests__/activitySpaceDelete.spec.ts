import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Space from "@sentrei/common/models/Space";

import {activitySpaceResponseDeleted} from "../../../__dummy__/Activity";
import {spaceResponse} from "../../../__dummy__/Space";
import activitySpaceDelete from "../activitySpaceDelete";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add a new delete to activities", async done => {
  const snap = {
    data: (): Space.Response => spaceResponse,
  };
  const context = {params: {id: "spaceId"}};

  spyOn(db.collection(""), "add").and.returnValue(true);

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activitySpaceDelete);
  const req = await wrapped(snap, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(
    activitySpaceResponseDeleted,
  );
  done();
});
