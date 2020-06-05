/* eslint-disable @typescript-eslint/no-namespace */
import Profile from "@sentrei/common/models/Profile";

declare namespace User {
  export interface Response extends Profile.Response {
    role: "admin" | "moderator" | "viewer";
  }

  export interface Get extends Response {
    email: string | null;
    uid: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default User;
