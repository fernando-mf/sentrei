/* eslint-disable @typescript-eslint/unbound-method */

import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import sdkProfileUpdate from "../sdkProfileUpdate";

const testEnv = functions();
const auth = admin.auth();

test("Send a request to update a user's profile and claims", async done => {
  spyOn(Promise, "all").and.returnValue("updated");
  spyOn(auth, "updateUser").and.returnValue("updateUser");
  spyOn(auth, "setCustomUserClaims").and.returnValue("userClaims");

  const change = {
    after: {
      data: (): {
        name: string;
        photo: string;
        username: string;
      } => ({name: "user", photo: "photo.png", username: "test"}),
    },
  };
  const params = {id: "userId"};

  const wrapped = testEnv.wrap(sdkProfileUpdate);
  const req = await wrapped(change, {params});
  const user = {displayName: "user", photoURL: "photo.png"};
  const claims = {username: "test"};

  expect(req).toBe("updated");
  expect(auth.updateUser).toHaveBeenCalledWith("userId", user);
  expect(auth.setCustomUserClaims).toHaveBeenCalledWith("userId", claims);
  expect(Promise.all).toHaveBeenCalledWith(["updateUser", "userClaims"]);
  done();
});
