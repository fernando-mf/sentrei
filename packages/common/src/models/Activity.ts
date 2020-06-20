import Profile from "@sentrei/common/models/Profile";
import Room from "@sentrei/common/models/Room";
import Space from "@sentrei/common/models/Space";

export type UserAction = "created" | "updated" | "deleted";

type EditableContent = "rooms" | "spaces";

type EditableContentType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in EditableContent]: any;
};

export type ContentCategory = EditableContent;

declare namespace Activity {
  interface Fields<T, C extends keyof EditableContentType> {
    action: UserAction;
    before: T | null;
    after: T | null;
    category: C;
    categoryId: string;
    createdById: string;
    spaces: string[];
    updatedAt: firebase.firestore.FieldValue;
    user: Profile.Response;
    userNotification: string[];
  }

  interface Create<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "created";
    before: null;
    after: T;
  }

  interface Update<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "updated";
    before: T;
    after: T;
  }

  interface Delete<T, C extends keyof EditableContentType>
    extends Fields<T, C> {
    action: "deleted";
    before: T;
    after: null;
  }

  export type CreateRoom = Create<Room.Response, "rooms">;
  export type UpdateRoom = Update<Room.Response, "rooms">;
  export type DeleteRoom = Delete<Room.Response, "rooms">;
  export type CreateSpace = Create<Space.Response, "spaces">;
  export type UpdateSpace = Update<Space.Response, "spaces">;
  export type DeleteSpace = Delete<Space.Response, "spaces">;

  export type CreateActions = CreateRoom | CreateSpace;

  export type UpdateActions = UpdateRoom | UpdateSpace;

  export type DeleteActions = DeleteRoom | DeleteSpace;

  export type Response = Omit<
    CreateActions | UpdateActions | DeleteActions,
    "updatedAt"
  > & {
    updatedAt: firebase.firestore.Timestamp;
  };

  export type Get = Omit<Response, "updatedAt"> & {
    id: string;
    updatedAt: string;
  };

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Activity;
