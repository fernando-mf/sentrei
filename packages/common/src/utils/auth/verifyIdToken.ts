import * as admin from "firebase-admin";
import getConfig from "next/config";

const {serverRuntimeConfig} = getConfig();

const verifyIdToken = (token: string): Promise<admin.auth.DecodedIdToken> => {
  // TODO: Reenable dev certs
  // const cert = {
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   clientEmail: serverRuntimeConfig.FIREBASE_CLIENT_EMAIL,
  //   privateKey: serverRuntimeConfig.FIREBASE_PRIVATE_KEY.replace(/\n/g, " "),
  // };

  if (!admin.apps.length) {
    admin.initializeApp();
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error;
    });
};

export default verifyIdToken;
