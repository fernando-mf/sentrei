/* eslint-disable @typescript-eslint/no-namespace */

import Metadata from "@sentrei/common/models/Metadata";

declare namespace Room {
  export type Fields = {
    memberCount: number;
  };

  interface EditableFields extends Fields {
    description: string;
    name: string;
  }

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Response extends Fields, Metadata.Response {
    joined?: firebase.firestore.Timestamp;
  }

  export interface Get extends Fields {
    joined: string | null;
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Room;
