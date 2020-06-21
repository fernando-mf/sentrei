import Member from "@sentrei/common/models/Member";

import {firestore} from "../__mocks__/firebase-admin";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const memberResponse: Member.Response = {
  ...profileResponse,
  joined: firestore.Timestamp,
};
