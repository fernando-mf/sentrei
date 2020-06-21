import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Room from "@sentrei/common/models/Room";

import {memberResponse} from "../../../__dummy__/Member";
import {roomResponse} from "../../../__dummy__/Room";
import roomMemberSet from "../roomMemberSet";

const testEnv = functions();
const db = admin.firestore();

test("On rooms create, add the room creator to the member list", async done => {
  spyOn(db.doc(""), "set").and.returnValue("updated");

  const snap = {
    data: (): Room.Response => roomResponse,
    id: "roomId",
  };
  const wrapped = testEnv.wrap(roomMemberSet);
  const req = await wrapped(snap);
  const expected = {
    ...memberResponse,
    id: "profile",
  };

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("rooms/roomId/members/userId");
  expect(db.doc("").set).toHaveBeenCalledWith(expected);
  done();
});
