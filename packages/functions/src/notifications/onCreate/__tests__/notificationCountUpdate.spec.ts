import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Notification from "@sentrei/common/models/Notification";

import {notificationResponse} from "../../../__dummy__/Notification";
import notificationCountUpdate from "../notificationCountUpdate";

const testEnv = functions();
const db = admin.firestore();

beforeEach(() => {
  jest.clearAllMocks();
});

test("On create, return when app notifications are disabled", async done => {
  const userData = {notificationSettings: {contentChanges: ["email"]}};
  const snap = {
    data: (): Notification.Response => notificationResponse,
  };

  spyOn(db, "doc").and.returnValue({
    get: jest.fn().mockReturnValue({data: () => userData}),
    update: jest.fn().mockReturnValue("updated"),
  });

  const context = {params: {userId: "userId"}};
  const wrapped = testEnv.wrap(notificationCountUpdate);
  const req = await wrapped(snap, context);

  expect(req).toBe(false);
  expect(db.doc).toHaveBeenCalledWith("users/userId");
  expect(db.doc("").get).toHaveBeenCalledTimes(1);
  expect(db.doc("").update).not.toHaveBeenCalled();
  done();
});

test("On create, increment notificationCount", async done => {
  const userData = {notificationSettings: {contentChanges: ["app"]}};
  const snap = {
    data: (): Notification.Response => notificationResponse,
  };

  spyOn(db, "doc").and.returnValue({
    get: jest.fn().mockReturnValue({data: () => userData}),
    update: jest.fn().mockReturnValue("updated"),
  });

  const context = {params: {userId: "userId"}};
  const wrapped = testEnv.wrap(notificationCountUpdate);
  const req = await wrapped(snap, context);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("users/userId");
  expect(db.doc("").get).toHaveBeenCalledTimes(1);
  expect(db.doc("").update).toHaveBeenCalledWith({notificationCount: 1});
  done();
});
