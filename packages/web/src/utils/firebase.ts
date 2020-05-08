import * as Sentry from "@sentry/node";
import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/performance";
import isBrowser from "@sentrei/web/utils/isBrowser";
import "@sentrei/web/utils/sentry";

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

if (
  isBrowser &&
  !firebase.apps.length &&
  process.env.NODE_ENV === "production"
) {
  firebase.initializeApp(firebaseConfig);
  try {
    firebase.analytics();
    firebase.performance();
  } catch (error) {
    Sentry.captureException(error);
  }
}

export default firebase;
