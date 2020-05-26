import * as admin from "firebase-admin";

import getConfig from "next/config";

import isDev from "@sentrei/common/utils/isDev";

const {serverRuntimeConfig} = getConfig();

const verifyIdToken = (token: string) => {
  if (!admin.apps.length) {
    if (isDev()) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY,
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      });
    } else {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: serverRuntimeConfig.FIREBASE_CLIENT_EMAIL,
          privateKey: serverRuntimeConfig.FIREBASE_PRIVATE_KEY.replace(
            /\\n/g,
            "\n",
          ),
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      });
    }
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error;
    });
};

export default verifyIdToken;
