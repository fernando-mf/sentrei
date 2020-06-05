/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import userSpaceDelete from "../userSpaceDelete";

const testEnv = functions();
const db = admin.firestore();

test("On members delete, update space to delete a user's spaces", async done => {
  const space = {
    title: "name",
    updatedAt: "now",
  };
  spyOn(db.doc(""), "set").and.returnValue("updated");
  spyOn(db.doc(""), "get").and.returnValue({data: () => space});

  const params = {spaceId: "itemId", userId: "editorId"};
  const data = {joined: "now"};
  const snap = {
    data: (): {
      joined: string;
    } => data,
  };
  const wrapped = testEnv.wrap(userSpaceDelete);
  const req = await wrapped(snap, {params});
  const payload = {...space, id: "itemId", joined: "timestamp"};

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("spaces/itemId");
  expect(db.doc).toHaveBeenCalledWith("users/editorId/spaces/itemId");
  expect(db.doc("").set).toHaveBeenCalledWith(payload);
  done();
});
