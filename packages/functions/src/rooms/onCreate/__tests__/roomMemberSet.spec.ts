/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import roomMemberSet from "../roomMemberSet";

const testEnv = functions();
const db = admin.firestore();

test("On rooms create, add the room creator to the member list", async done => {
  spyOn(db.doc(""), "set").and.returnValue("updated");

  const profile = {name: "name"};
  const data = {createdAt: "now", createdBy: profile, createdById: "userId"};
  const snap = {
    data: (): {
      createdAt: string;
      createdBy: {
        name: string;
      };
      createdById: string;
    } => data,
    id: "itemId",
  };
  const wrapped = testEnv.wrap(roomMemberSet);
  const req = await wrapped(snap);
  const payload = {...profile, joined: "now"};

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("rooms/itemId/members/userId");
  expect(db.doc("").set).toHaveBeenCalledWith(payload);
  done();
});
