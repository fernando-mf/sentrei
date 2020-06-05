/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Profile {
  export type Response = {
    name: string;
    username: string;
  };

  export type Update = Partial<Response>;

  export type Get = {
    id: string;
    name: string;
    username: string;
  };

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Profile;
