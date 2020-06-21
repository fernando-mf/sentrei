import Room from "@sentrei/common/models/Room";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {timestamp} from "../__mocks__/firebase-testing";

// eslint-disable-next-line import/prefer-default-export
export const roomResponse: Room.Response = {
  memberCount: 0,
  name: "room",
  photo: null,
  description: "room",
  joined: timestamp,
  createdAt: timestamp,
  createdBy: profileGet,
  createdById: "userId",
  updatedAt: timestamp,
  updatedBy: profileGet,
  updatedById: "userId",
  spaceId: "spaceId",
};
