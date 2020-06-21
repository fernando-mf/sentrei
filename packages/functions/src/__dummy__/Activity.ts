import Activity from "@sentrei/common/models/Activity";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";
import {spaceResponse} from "@sentrei/functions/__dummy__/Space";

import {firestore} from "../__mocks__/firebase-admin";

export const activitySpaceResponseUpdated: Activity.Response = {
  before: null,
  after: spaceResponse,
  action: "updated",
  category: "spaces",
  categoryId: "category",
  createdById: "editorId",
  space: "space",
  updatedAt: firestore.Timestamp,
  user: profileGet,
  userNotification: ["app"],
};

export const activitySpaceResponseDeleted: Activity.Response = {
  before: spaceResponse,
  after: null,
  action: "deleted",
  category: "spaces",
  categoryId: "category",
  createdById: "editorId",
  space: "space",
  updatedAt: firestore.Timestamp,
  user: profileGet,
  userNotification: ["app"],
};
