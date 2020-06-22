import * as firebase from "@firebase/testing";

export const timestamp = firebase.firestore.Timestamp.fromDate(
  new Date(`2020/01/01 00:00:00`),
);

export const timestampNow = firebase.firestore.FieldValue.serverTimestamp();
