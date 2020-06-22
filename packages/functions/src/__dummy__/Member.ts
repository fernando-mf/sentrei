import Member from "@sentrei/common/models/Member";

import {timestamp} from "../__mocks__/firebase-testing";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const memberResponse: Member.Response = {
  ...profileResponse,
  joined: timestamp,
};
