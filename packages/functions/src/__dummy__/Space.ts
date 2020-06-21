import Space from "@sentrei/common/models/Space";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {timestamp} from "../__mocks__/firebase-testing";

// eslint-disable-next-line import/prefer-default-export
export const spaceResponse: Space.Response = {
  memberCount: 0,
  name: "space",
  photo: null,
  description: "space",
  joined: timestamp,
  createdAt: timestamp,
  createdBy: profileGet,
  createdById: "spaceUser",
  updatedAt: timestamp,
  updatedBy: profileGet,
  updatedById: "spaceUser",
};
