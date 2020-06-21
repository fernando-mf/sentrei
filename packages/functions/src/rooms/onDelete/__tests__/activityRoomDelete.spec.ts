/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import activityRoomDelete from "../activityRoomDelete";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add a new delete to activities", async done => {
  const profile = {name: "Leo", photo: "leo.jpg"};
  const beforeData = {
    createdById: "authorId",
    description: "old description",
    updatedAt: "timestamp",
    updatedBy: profile,
    updatedById: "editorId",
    url: "old link",
  };
  const snap = {
    data: (): {
      createdById: string;
      description: string;
      updatedAt: string;
      updatedBy: {
        name: string;
        photo: string;
      };
      updatedById: string;
      url: string;
    } => ({...beforeData}),
  };
  const context = {params: {id: "itemId"}};
  const expected = {
    action: "deleted",
    after: null,
    before: beforeData,
    category: "rooms",
    categoryId: "itemId",
    createdById: "editorId",
    space: "itemId",
    updatedAt: "timestamp",
    user: profile,
    userNotification: ["authorId"],
  };

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activityRoomDelete);
  const req = await wrapped(snap, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(expected);
  done();
});
