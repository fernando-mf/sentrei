import * as firebase from "@firebase/testing";

import Space from "@sentrei/common/models/Space";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

// eslint-disable-next-line import/prefer-default-export
export const spaceResponse: Space.Response = {
  memberCount: 0,
  name: "space",
  photo: null,
  description: "space",
  joined: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  createdAt: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  createdBy: profileGet,
  createdById: "spaceUser",
  updatedAt: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  updatedBy: profileGet,
  updatedById: "spaceUser",
};
