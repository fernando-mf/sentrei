import * as firebase from "firebase";

const fireDB = (): firebase.firestore.Firestore => {
  const db = firebase.firestore();

  return db;
};

export default fireDB;
