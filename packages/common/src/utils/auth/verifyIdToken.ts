import * as admin from "firebase-admin";
import getConfig from "next/config";

const {serverRuntimeConfig} = getConfig();

const verifyIdToken = (token: string): Promise<admin.auth.DecodedIdToken> => {
  const cert = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: serverRuntimeConfig.FIREBASE_CLIENT_EMAIL,
    privateKey: serverRuntimeConfig.FIREBASE_PRIVATE_KEY,
  };

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(cert),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error;
    });
};

export default verifyIdToken;
