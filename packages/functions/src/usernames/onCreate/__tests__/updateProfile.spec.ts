import functions from "firebase-functions-test";

import Username from "@sentrei/common/models/username";
import adminDB from "@sentrei/common/utils/adminDB";

import updateProfile from "../updateProfile";

const testEnv = functions();

test("Update the username field in the profile collection", async done => {
  spyOn(adminDB.doc(""), "update").and.returnValue("updated");

  const snap = {id: "username", data: (): Username => ({uid: "userId"})};
  const wrapped = testEnv.wrap(updateProfile);
  const req = await wrapped(snap);

  expect(req).toBe("updated");

  const {
    doc,
    doc: {update},
  } = adminDB;
  expect(doc).toHaveBeenCalledWith("profile/userId");
  expect(update).toHaveBeenCalledWith({username: "username"});
  done();
});
