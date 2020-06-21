/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import activityRoomUpdate from "../activityRoomUpdate";

const testEnv = functions();
const db = admin.firestore();

test("Return when there are no changes", async done => {
  const data = {
    description: "description",
    photo: "photo.jpg",
    title: "topic name",
  };
  const beforeData = {
    ...data,
    updatedAt: "old",
  };
  const afterData = {
    ...data,
  };
  const before = {
    data: (): {
      updatedAt: string;
      description: string;
      photo: string;
      title: string;
    } => beforeData,
  };
  const after = {
    data: (): {
      description: string;
      photo: string;
      title: string;
    } => afterData,
  };
  const changes = {after, before};
  const context = {params: {id: "itemId"}};

  const wrapped = testEnv.wrap(activityRoomUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(false);
  expect(db.doc).not.toHaveBeenCalled();
  expect(db.collection).not.toHaveBeenCalled();
  done();
});

test("Send a request to add a new item to activities", async done => {
  const profile = {name: "Poe", photo: "Poe.jpg"};
  const data = {
    createdById: "authorId",
    updatedBy: profile,
    updatedById: "editorId",
  };
  const beforeData = {
    ...data,
    description: "old description",
    photo: "old_photo.jpg",
  };
  const afterData = {
    ...data,
    description: "new description",
    photo: "new_photo.png",
    updatedAt: "today",
  };
  const before = {
    data: (): {
      description: string;
      photo: string;
      createdById: string;
      updatedBy: {
        name: string;
        photo: string;
      };
      updatedById: string;
    } => beforeData,
  };
  const after = {
    data: (): {
      description: string;
      photo: string;
      updatedAt: string;
      createdById: string;
      updatedBy: {
        name: string;
        photo: string;
      };
      updatedById: string;
    } => afterData,
  };
  const changes = {after, before};
  const context = {params: {id: "itemId"}};
  const expected = {
    action: "updated",
    after: afterData,
    before: beforeData,
    category: "rooms",
    categoryId: "itemId",
    createdById: "editorId",
    spaceId: "itemId",
    updatedAt: "today",
    user: profile,
    userNotification: ["authorId"],
  };

  spyOn(db.collection(""), "add").and.returnValue(true);

  const wrapped = testEnv.wrap(activityRoomUpdate);
  const req = await wrapped(changes, context);

  expect(req).toBe(true);
  expect(db.collection).toHaveBeenCalledWith("activity");
  expect(db.collection("").add).toHaveBeenCalledWith(expected);
  done();
});
