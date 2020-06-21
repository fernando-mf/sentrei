import * as firebase from "@firebase/testing";

// eslint-disable-next-line import/prefer-default-export
export const timestamp = firebase.firestore.Timestamp.fromDate(
  new Date(`2020/01/01 00:00:00`),
);
