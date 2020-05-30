import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Username from "@sentrei/common/models/username";

import updateProfile from "../onCreate/updateProfile";

const testEnv = functions();
const db = admin.firestore();

test("update the username field in the profile collection", async done => {
  spyOn(db.doc(""), "update").and.returnValue("updated");

  const snap = {id: "username", data: (): Username => ({uid: "userId"})};
  const wrapped = testEnv.wrap(updateProfile);
  const req = await wrapped(snap);

  expect(req).toBe("updated");
  const {doc} = db;
  expect(doc).toHaveBeenCalledWith("profile/userId");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  expect(doc("").update).toHaveBeenCalledWith({username: "username"});
  done();
});
