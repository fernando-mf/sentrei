import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import Profile from "@sentrei/common/models/Profile";

import {profileResponse} from "../../../__dummy__/Profile";

import sdkProfileUpdate from "../sdkProfileUpdate";

const testEnv = functions();
const auth = admin.auth();

test("Send a request to update a user's profile and claims", async done => {
  spyOn(Promise, "all").and.returnValue("updated");
  spyOn(auth, "updateUser").and.returnValue("updateUser");
  spyOn(auth, "setCustomUserClaims").and.returnValue("userClaims");

  const change = {
    after: {
      data: (): Profile.Response => profileResponse,
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
