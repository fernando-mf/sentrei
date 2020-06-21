import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import profileUpdate from "../profileUpdate";

const testEnv = functions();
const db = admin.firestore();

test("Update the username field in the profile collection", async done => {
  spyOn(db.doc(""), "update").and.returnValue("updated");

  const snap = {
    id: "username",
    data: (): {
      uid: string;
    } => ({uid: "userId"}),
  };
  const wrapped = testEnv.wrap(profileUpdate);
  const req = await wrapped(snap);

  expect(req).toBe("updated");
  expect(db.doc).toHaveBeenCalledWith("profiles/userId");
  expect(db.doc("").update).toHaveBeenCalledWith({username: "username"});
  done();
});
