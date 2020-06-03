/* eslint-disable no-restricted-globals */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/functions";
import "firebase/performance";
import "firebase/storage";

import isBrowser from "@sentrei/common/utils/isBrowser";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const storage = firebase.storage();

export const functions = firebase.functions();
if (isBrowser() && location.hostname === "localhost") {
  functions.useFunctionsEmulator("http://localhost:5001");
} else if (isBrowser() && location.hostname === "127.0.0.1") {
  functions.useFunctionsEmulator("http://127.0.0.1:5001");
}

export const db = firebase.firestore();
db.settings({
  ignoreUndefinedProperties: true,
});
if (isBrowser() && location.hostname === "localhost") {
  db.settings({
    host: "localhost:8080",
    ssl: false,
  });
} else if (isBrowser() && location.hostname === "127.0.0.1") {
  db.settings({
    host: "127.0.0.1:8080",
    ssl: false,
  });
}

export const {analytics, performance} = firebase;

export const {arrayRemove, arrayUnion} = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export default firebase;
