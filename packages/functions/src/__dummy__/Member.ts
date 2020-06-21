import * as firebase from "@firebase/testing";

import Member from "@sentrei/common/models/Member";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const memberResponse: Member.Response = {
  ...profileResponse,
  joined: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
};
