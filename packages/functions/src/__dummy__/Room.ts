import Room from "@sentrei/common/models/Room";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {firestore} from "../__mocks__/firebase-admin";

// eslint-disable-next-line import/prefer-default-export
export const roomResponse: Room.Response = {
  memberCount: 0,
  name: "room",
  photo: null,
  description: "room",
  joined: firestore.Timestamp,
  createdAt: firestore.Timestamp,
  createdBy: profileGet,
  createdById: "userId",
  updatedAt: firestore.Timestamp,
  updatedBy: profileGet,
  updatedById: "userId",
  spaceId: "spaceId",
};
