import Activity from "@sentrei/common/models/Activity";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";
import {roomResponse} from "@sentrei/functions/__dummy__/Room";
import {spaceResponse} from "@sentrei/functions/__dummy__/Space";

import {firestore} from "../__mocks__/firebase-admin";

export const activityResponseBase = {
  categoryId: "category",
  createdById: "userId",
  spaceId: "spaceId",
  updatedAt: firestore.Timestamp,
  user: profileGet,
  userNotification: ["app"],
};

export const activitySpaceResponseCreated: Activity.Response = {
  before: null,
  after: spaceResponse,
  action: "created",
  category: "spaces",
  ...activityResponseBase,
};

export const activitySpaceResponseUpdated: Activity.Response = {
  before: spaceResponse,
  after: spaceResponse,
  action: "updated",
  category: "spaces",
  ...activityResponseBase,
};

export const activitySpaceResponseDeleted: Activity.Response = {
  before: spaceResponse,
  after: null,
  action: "deleted",
  category: "spaces",
  ...activityResponseBase,
};

export const activityRoomResponseCreated: Activity.Response = {
  before: null,
  after: roomResponse,
  action: "created",
  category: "rooms",
  ...activityResponseBase,
};

export const activityRoomResponseUpdated: Activity.Response = {
  before: roomResponse,
  after: roomResponse,
  action: "updated",
  category: "rooms",
  ...activityResponseBase,
};

export const activityRoomResponseDeleted: Activity.Response = {
  before: roomResponse,
  after: null,
  action: "deleted",
  category: "rooms",
  ...activityResponseBase,
};
