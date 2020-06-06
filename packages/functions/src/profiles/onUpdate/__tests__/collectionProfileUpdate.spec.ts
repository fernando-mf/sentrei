/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import collectionProfileUpdate from "../collectionProfileUpdate";

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

afterEach(() => {
  jest.clearAllMocks();
});

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

  const wrapped = testEnv.wrap(collectionProfileUpdate);
  const req = await wrapped(noChange, {params: {uid: "testUID"}});

  expect(req).toBe(false);
  done();
});

test("should update the profile for all collections", async done => {
  spyOn(Promise, "all").and.returnValue("updated");
  spyOn(db.collection("").where("", "==", ""), "get").and.returnValue({
    docs: [
      {ref: {update: jest.fn().mockReturnValue("doc1")}},
      {ref: {update: jest.fn().mockReturnValue("doc2")}},
    ],
  });

  const wrapped = testEnv.wrap(collectionProfileUpdate);
  const req = await wrapped(change, {params: {uid: "testUID"}});

  const spy1 = (await db.collection("").where("", "==", "").get()).docs[0].ref
    .update;
  const spy2 = (await db.collection("").where("", "==", "").get()).docs[1].ref
    .update;

  expect(req).toBe("updated");
  expect(db.collection).toHaveBeenCalledWith("spaces");
  expect(spy1).toHaveBeenCalledWith({createdBy: data});
  expect(spy2).toHaveBeenCalledWith({updatedBy: data});
  expect(spy1).toHaveBeenCalledTimes(2);
  expect(spy2).toHaveBeenCalledTimes(2);
  expect(Promise.all).toHaveBeenCalledWith(["doc1", "doc2"]);
  done();
});
