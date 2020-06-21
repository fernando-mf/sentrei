import * as firebase from "@firebase/testing";

import Notification from "@sentrei/common/models/Notification";

import {profileResponse} from "./Profile";

// eslint-disable-next-line import/prefer-default-export
export const notificationResponse: Notification.Response = {
  action: "created",
  activityId: "notificationId",
  updatedAt: firebase.firestore.Timestamp.fromDate(
    new Date(`2020/01/01 00:00:00`),
  ),
  type: "chat",
  user: profileResponse,
};
