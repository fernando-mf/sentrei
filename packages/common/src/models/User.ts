/* eslint-disable @typescript-eslint/no-namespace */

import Profile from "@sentrei/common/models/Profile";

declare namespace User {
  export type NotificationType = "app" | "email";

  export interface NotificationSettings {
    chat: NotificationType[];
    invitation: NotificationType[];
    update: NotificationType[];
  }

  export interface Response extends Profile.Response {
    email: string | null;
    notificationCount: number;
    notificationSettings: NotificationSettings;
    role: "admin" | "moderator" | "viewer";
  }

  export interface Get extends Response {
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }

  export interface Update {
    notifications?: number;
    notificationSettings?: NotificationSettings;
  }
}

export default User;
