/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import userSpaceUpdate from "../userSpaceUpdate";

const testEnv = functions();
const db = admin.firestore();

beforeAll(() => {
  spyOn(Promise, "all").and.returnValue("updated");
});

test("Update all user spaces on spaces update", async done => {
  const docs = [{id: "user1"}, {id: "user2"}];
  spyOn(db.collection(""), "get").and.returnValue({docs});
  spyOn(db.doc(""), "update").and.returnValue("ref");

  const before = {
    description: "old",
    name: "old",
    updatedAt: "old",
  };
  const after = {
    description: "new",
    name: "new",
    updatedAt: "now",
  };
  const change = {
    before: {
      data: (): {
        description: string;
        name: string;
        updatedAt: string;
      } => before,
    },
    after: {
      data: (): {
        description: string;
        name: string;
        updatedAt: string;
      } => after,
      id: "itemId",
    },
  };
  const wrapped = testEnv.wrap(userSpaceUpdate);
  const req = await wrapped(change);

  expect(req).toBe("updated");
  expect(db.collection).toHaveBeenCalledWith("spaces/itemId/members");
  expect(db.doc).toHaveBeenCalledWith("users/user1/spaces/itemId");
  expect(db.doc).toHaveBeenCalledWith("users/user2/spaces/itemId");
  expect(db.doc("").update).toHaveBeenCalledWith(after);
  expect(Promise.all).toHaveBeenCalledWith(["ref", "ref"]);
  done();
});
