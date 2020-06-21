import Space from "@sentrei/common/models/Space";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {firestore} from "../__mocks__/firebase-admin";

// eslint-disable-next-line import/prefer-default-export
export const spaceResponse: Space.Response = {
  memberCount: 0,
  name: "space",
  photo: null,
  description: "space",
  joined: firestore.Timestamp,
  createdAt: firestore.Timestamp,
  createdBy: profileGet,
  createdById: "spaceUser",
  updatedAt: firestore.Timestamp,
  updatedBy: profileGet,
  updatedById: "spaceUser",
};
