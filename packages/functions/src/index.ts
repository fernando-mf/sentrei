/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import "firebase-functions";

let serviceAccount: any;
let storageBucket = "";
const environment: string | undefined = process.env.FIREBASE_CONFIG;

if (environment === "sentrei-alpha") {
  serviceAccount = require("../key/functions-admin-alpha.json");
  storageBucket = "sentrei-alpha.appspot.com";
} else if (environment === "sentrei-beta") {
  serviceAccount = require("../key/functions-admin-beta.json");
  storageBucket = "sentrei-beta.appspot.com";
} else if (environment === "sentrei-master") {
  serviceAccount = require("../key/functions-admin-master.json");
  storageBucket = "sentrei-master.appspot.com";
}

const adminConfig = JSON.parse(environment);
adminConfig.credential = admin.credential.cert(serviceAccount);
adminConfig.storageBucket = storageBucket;
admin.initializeApp(adminConfig);

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
const getEnvironment = functions.https.onCall(async (data, context) => {
  return {environment};
});

export default getEnvironment;
