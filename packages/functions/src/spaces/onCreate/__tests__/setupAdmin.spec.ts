import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import setupAdmin from "../setupAdmin";

const testEnv = functions();
const db = admin.firestore();

test("Add the space admin to the member list", async done => {
  spyOn(db.doc(""), "set").and.returnValue("updated");

  const profile = {name: "name"};
  const data = {createdAt: "now", createdBy: profile, createdById: "userId"};
  const snap = {
    data: (): {
      createdAt: string;
      createdBy: {
        name: string;
      };
      createdById: string;
    } => data,
    id: "itemId",
  };
  const wrapped = testEnv.wrap(setupAdmin);
  const req = await wrapped(snap);
  const payload = {...profile, joined: "now"};

  expect(req).toBe("updated");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  expect(db.doc).toHaveBeenCalledWith("spaces/itemId/members/userId");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  expect(db.doc("").set).toHaveBeenCalledWith(payload);
  done();
});
