import * as firebase from "@firebase/testing";

import Room from "@sentrei/common/models/Room";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

// eslint-disable-next-line import/prefer-default-export
export const roomResponse: Room.Response = {
  memberCount: 0,
  name: "room",
  photo: null,
  description: "room",
  joined: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  createdAt: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  createdBy: profileGet,
  createdById: "userId",
  updatedAt: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  updatedBy: profileGet,
  updatedById: "userId",
  spaceId: "spaceId",
};
