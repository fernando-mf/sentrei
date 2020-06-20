/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import spaceDeleteNone from "../spaceDeleteNone";

const testEnv = functions();
const db = admin.firestore();

test("On members delete, recursively delete the space member is empty", async done => {
  spyOn(db.doc(""), "delete").and.returnValue("deleted");

  const params = {collection: "spaces", docId: "spaceId"};
  const wrapped = testEnv.wrap(spaceDeleteNone);
  const req = await wrapped({}, {params});

  expect(req).toBe("deleted");
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId");
  expect(db.doc("").delete);
  done();
});
