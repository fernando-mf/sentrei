import Space from "@sentrei/common/models/Space";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {timestamp, timestampNow} from "../__mocks__/firebase-testing";

export const spaceCreate: Space.Create = {
  memberCount: 0,
  name: "space",
  photo: null,
  description: "space",
  createdAt: timestampNow,
  createdBy: profileGet,
  createdById: "spaceUser",
  updatedAt: timestampNow,
  updatedBy: profileGet,
  updatedById: "spaceUser",
};

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

export const spaceUpdate: Space.Update = {
  name: "space",
  photo: null,
  description: "space",
  updatedAt: timestamp,
  updatedBy: profileGet,
  updatedById: "spaceUser",
};
