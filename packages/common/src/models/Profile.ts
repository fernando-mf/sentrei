/* eslint-disable @typescript-eslint/no-namespace */
namespace Profile {
  export interface Response {
    name: string;
    username: string;
  }

  export type Update = Partial<Response>;

  export interface Get {
    id: string;
    name: string;
    username: string;
  }

  export interface Snapshot extends Get {
    snap: firebase.firestore.DocumentSnapshot;
  }
}

export default Profile;
