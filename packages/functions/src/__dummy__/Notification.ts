import Notification from "@sentrei/common/models/Notification";

import {timestamp} from "../__mocks__/firebase-testing";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const notificationResponse: Notification.Response = {
  action: "created",
  activityId: "notificationId",
  updatedAt: timestamp,
  type: "chat",
  user: profileResponse,
};
