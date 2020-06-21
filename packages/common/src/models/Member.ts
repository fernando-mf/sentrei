import Profile from "@sentrei/common/models/Profile";

declare namespace Member {
  export type Collections = "spaces" | "rooms";

  export type Join = {
    joined: firebase.firestore.FieldValue;
  };

  export interface Request extends Join, Profile.Response {}

  export interface Response extends Profile.Response {
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
