/* eslint-disable @typescript-eslint/no-namespace */
import Profile from "@sentrei/common/models/Profile";
import User from "@sentrei/common/models/User";

declare namespace Notification {
  export type Type = keyof User.NotificationSettings;
  export type RequestType = Type | "none";

  export interface Email {
    editId: string;
    name: string;
    title: string;
    username: string;
  }

  export interface Create {
    activityId: string | null;
    type: Type;
    updatedAt: firebase.firestore.FieldValue;
    user: Profile.Response;
  }

  export interface Response extends Omit<Create, "updatedAt"> {
    updatedAt: firebase.firestore.Timestamp;
  }

  export interface Get extends Omit<Response, "updatedAt"> {
    id: string;
    updatedAt: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Notification;
