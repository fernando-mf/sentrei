/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import userRoomDelete from "../userRoomDelete";

const testEnv = functions();
const db = admin.firestore();

test("On rooms delete, delete user rooms on delete rooms", async done => {
  const docs = [{id: "user1"}, {id: "user2"}];
  spyOn(Promise, "all").and.returnValue("updated");
  spyOn(db.collection(""), "get").and.returnValue({docs});
  spyOn(db.doc(""), "delete").and.returnValue("ref");

  const snap = {id: "itemId"};
  const wrapped = testEnv.wrap(userRoomDelete);
  const req = await wrapped(snap);

  expect(req).toBe("updated");
  expect(db.collection).toHaveBeenCalledWith("rooms/itemId/members");
  expect(db.doc).toHaveBeenCalledWith("users/user1/rooms/itemId");
  expect(db.doc).toHaveBeenCalledWith("users/user2/rooms/itemId");
  expect(db.doc("").delete).toHaveBeenCalledTimes(2);
  expect(Promise.all).toHaveBeenCalledWith(["ref", "ref"]);
  done();
});
