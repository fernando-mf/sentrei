import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Space from "@sentrei/common/models/Space";

import {memberResponse} from "../../../__dummy__/Member";
import {spaceResponse} from "../../../__dummy__/Space";

import spaceMemberSet from "../spaceMemberSet";

const testEnv = functions();
const db = admin.firestore();

test("On spaces create, add the space creator to the member list", async done => {
  spyOn(db.doc(""), "set").and.returnValue("updated");

  const snap = {
    data: (): Space.Response => spaceResponse,
    id: "spaceId",
  };
  const wrapped = testEnv.wrap(spaceMemberSet);
  const req = await wrapped(snap);
  const expected = {
    ...memberResponse,
    id: "profile",
  };

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("spaces/itemId/members/userId");
  expect(db.doc("").set).toHaveBeenCalledWith(expected);
  done();
});
