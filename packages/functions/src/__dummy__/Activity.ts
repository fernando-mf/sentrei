import Activity from "@sentrei/common/models/Activity";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";
import {roomResponse} from "@sentrei/functions/__dummy__/Room";
import {spaceResponse} from "@sentrei/functions/__dummy__/Space";

import {firestore} from "../__mocks__/firebase-admin";

export const activityResponseBase = {
  categoryId: "categoryId",
  createdById: "userId",
  spaceId: "spaceId",
  updatedAt: firestore.Timestamp,
  user: profileGet,
  userNotification: [],
};

export const activitySpaceResponseCreated: Activity.Response = {
  ...activityResponseBase,
  before: null,
  after: spaceResponse,
  action: "created",
  category: "spaces",
  categoryId: "spaceId",
};

export const activitySpaceResponseUpdated: Activity.Response = {
  ...activityResponseBase,
  before: spaceResponse,
  after: spaceResponse,
  action: "updated",
  category: "spaces",
  categoryId: "spaceId",
  createdById: "spaceUser",
};

export const activitySpaceResponseDeleted: Activity.Response = {
  ...activityResponseBase,
  before: spaceResponse,
  after: null,
  action: "deleted",
  category: "spaces",
  categoryId: "spaceId",
};

export const activityRoomResponseCreated: Activity.Response = {
  ...activityResponseBase,
  before: null,
  after: roomResponse,
  action: "created",
  category: "rooms",
  categoryId: "roomId",
};

export const activityRoomResponseUpdated: Activity.Response = {
  ...activityResponseBase,
  before: roomResponse,
  after: roomResponse,
  action: "updated",
  category: "rooms",
  categoryId: "roomId",
};

export const activityRoomResponseDeleted: Activity.Response = {
  ...activityResponseBase,
  before: roomResponse,
  after: null,
  action: "deleted",
  category: "rooms",
  categoryId: "roomId",
};
