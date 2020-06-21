import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import {spaceResponse} from "../../../__dummy__/Space";

import userSpaceSet from "../userSpaceSet";

const testEnv = functions();
const db = admin.firestore();

test("On members create, update space to set a user's spaces", async done => {
  spyOn(db.doc(""), "set").and.returnValue("updated");
  spyOn(db.doc(""), "get").and.returnValue({data: () => spaceResponse});

  const params = {spaceId: "spaceId", userId: "userId"};
  const data = {joined: "now"};
  const snap = {
    data: (): {
      joined: string;
    } => data,
  };
  const wrapped = testEnv.wrap(userSpaceSet);
  const req = await wrapped(snap, {params});
  const payload = {...spaceResponse, spaceId: "spaceId", joined: "timestamp"};

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId");
  expect(db.doc).toHaveBeenCalledWith("users/userId/spaces/spaceId");
  expect(db.doc("").set).toHaveBeenCalledWith(payload);
  done();
});
