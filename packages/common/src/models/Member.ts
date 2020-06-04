/* eslint-disable @typescript-eslint/no-namespace */
import Profile from "@sentrei/common/models/Profile";

declare namespace Member {
  export type Join = {
    joined: firebase.firestore.FieldValue;
  };

  export type Setup = Profile.Response;

  export interface Request extends Join, Setup {}

  export interface Response extends Setup {
    joined: firebase.firestore.Timestamp;
  }

  export interface Get extends Omit<Response, "joined"> {
    joined: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Member;
