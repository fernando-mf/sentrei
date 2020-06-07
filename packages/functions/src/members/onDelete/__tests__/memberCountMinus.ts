/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import memberCountMinus from "../memberCountMinus";

const testEnv = functions();
const db = admin.firestore();

test("On members delete, decrease the space memberCount", async done => {
  spyOn(db.doc(""), "update").and.returnValue("updated");

  const params = {collection: "spaces", docId: "spaceId"};
  const wrapped = testEnv.wrap(memberCountMinus);
  const req = await wrapped({}, {params});

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("spaces/spaceId");
  expect(db.doc("").update).toHaveBeenCalledWith({memberCount: -1});
  done();
});
