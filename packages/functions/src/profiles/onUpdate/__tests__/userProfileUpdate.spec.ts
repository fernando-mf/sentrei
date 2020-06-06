/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import userProfileUpdate from "../userProfileUpdate";

const testEnv = functions();
const db = admin.firestore();

const data = {
  name: "Leo",
  photo: "davinci.jpg",
};

const change = {
  before: {data: (): {} => ({})},
  after: {
    data: (): {
      name: string;
      photo: string;
    } => data,
  },
};

test("Return when the data did not change", async done => {
  const noChange = {
    before: {
      data: (): {
        name: string;
        photo: string;
      } => ({name: "Leo", photo: "davinci.jpg"}),
    },
    after: {
      data: (): {
        name: string;
        photo: string;
      } => ({name: "Leo", photo: "davinci.jpg"}),
    },
  };

  const wrapped = testEnv.wrap(userProfileUpdate);
  const req = await wrapped(noChange, {params: {uid: "testUID"}});

  expect(req).toBe(false);
  done();
});

test("Update the public profile when user settings change", async done => {
  spyOn(db.doc(""), "update").and.returnValue("settings");

  const wrapped = testEnv.wrap(userProfileUpdate);
  const req = await wrapped(change, {params: {uid: "testUID"}});

  expect(db.doc).toHaveBeenCalledWith("users/testUID");
  expect(db.doc("").update).toHaveBeenCalledWith(data);
  expect(req).toBe("settings");
  done();
});
