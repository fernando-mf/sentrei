import Metadata from "@sentrei/common/models/Metadata";

declare namespace Space {
  export type EditableFields = {
    description: string | null;
    name: string;
    photo: string | null;
  };

  interface Fields extends EditableFields {
    memberCount: number;
  }

  export interface Create extends Fields, Metadata.Create {}

  export interface Update extends Partial<EditableFields>, Metadata.Update {}

  export interface Response extends Fields, Metadata.Response {
    joined?: firebase.firestore.Timestamp;
  }

  export interface Get extends Fields, Metadata.Get {
    joined: string | null;
    id: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Space;
