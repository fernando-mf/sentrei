/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import activitySpaceCreate from "../activitySpaceCreate";

const testEnv = functions();
const db = admin.firestore();

test("Send a request to add a new space to activities", async done => {
  const profile = {name: "Joe", photo: "jeo.jpg"};
  const data = {
    createdById: "editorId",
    title: "new item",
    updatedAt: "today",
    updatedBy: profile,
    updatedById: "editorId",
  };
  const snap = {
    data: (): {
      createdById: string;
      title: string;
      updatedAt: string;
      updatedBy: {
        name: string;
        photo: string;
      };
      updatedById: string;
    } => data,
  };
  const context = {params: {id: "itemId"}};
  const expected = {
    action: "created",
    before: null,
    after: data,
    category: "spaces",
    categoryId: "itemId",
    createdById: "editorId",
    updatedAt: "today",
    spaceId: "itemId",
    user: profile,
    userNotification: [],
  };

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activitySpaceCreate);
  const req = await wrapped(snap, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(expected);
  done();
});
