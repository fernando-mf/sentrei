/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import userSpaceDelete from "../userSpaceDelete";

const testEnv = functions();
const db = admin.firestore();

test("On spaces delete, delete user spaces on delete spaces", async done => {
  const docs = [{id: "user1"}, {id: "user2"}];
  spyOn(Promise, "all").and.returnValue("updated");
  spyOn(db.collection(""), "get").and.returnValue({docs});
  spyOn(db.doc(""), "delete").and.returnValue("ref");

  const snap = {id: "itemId"};
  const wrapped = testEnv.wrap(userSpaceDelete);
  const req = await wrapped(snap);

  expect(req).toBe("updated");
  expect(db.collection).toHaveBeenCalledWith("spaces/itemId/members");
  expect(db.doc).toHaveBeenCalledWith("users/user1/spaces/itemId");
  expect(db.doc).toHaveBeenCalledWith("users/user2/spaces/itemId");
  expect(db.doc("").delete).toHaveBeenCalledTimes(2);
  expect(Promise.all).toHaveBeenCalledWith(["ref", "ref"]);
  done();
});
