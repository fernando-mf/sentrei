/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import updateProfile from "../onCreate/updateProfile";

const testEnv = functions();
const db = admin.firestore();

test("update the username field in the profile collection", async done => {
  spyOn(db.doc(""), "update").and.returnValue("updated");

  const snap = {id: "username", data: (): any => ({uid: "userId"})};
  const wrapped = testEnv.wrap(updateProfile);
  const req = await wrapped(snap);

  expect(req).toBe("updated");
  // expect(db.doc).toHaveBeenCalledWith("profile/userId");
  // expect(db.doc("").update).toHaveBeenCalledWith({username: "username"});
  done();
});
