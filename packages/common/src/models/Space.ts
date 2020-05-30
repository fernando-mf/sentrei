/* eslint-disable @typescript-eslint/no-namespace */

import Metadata from "@sentrei/common/models/Metadata";

namespace Space {
  export interface Summary {
    description: string;
    id: string;
    title: string;
  }

  export interface EditableFields {
    description: string;
    title: string;
  }

  interface Fields extends EditableFields {
    members: number;
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

export default Space;
