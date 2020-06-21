import Notification from "@sentrei/common/models/Notification";

import {firestore} from "../__mocks__/firebase-admin";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const notificationResponse: Notification.Response = {
  action: "created",
  activityId: "notificationId",
  updatedAt: firestore.Timestamp,
  title: "notification",
  type: "chat",
  user: profileResponse,
};
