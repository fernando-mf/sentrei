import * as admin from "firebase-admin";
import functions from "firebase-functions-test";

import spaceMemberSet from "../spaceMemberSet";

const testEnv = functions();
const db = admin.firestore();

test("On create, add the space creator to the member list", async done => {
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
  const wrapped = testEnv.wrap(spaceMemberSet);
  const req = await wrapped(snap);
  const payload = {...profile, joined: "now"};

  expect(req).toBe("updated");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  expect(db.doc).toHaveBeenCalledWith("spaces/itemId/members/userId");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  expect(db.doc("").set).toHaveBeenCalledWith(payload);
  done();
});
