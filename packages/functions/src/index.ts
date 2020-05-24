/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

let serviceAccount: any;
let storageBucket = "";
const {environment} = functions.config().app;
if (environment === "alpha") {
  serviceAccount = require("../key/functions-admin-alpha.json");
  storageBucket = "emails-show-8eb6f.appspot.com";
} else if (environment === "beta") {
  serviceAccount = require("../key/functions-admin-beta.json");
  storageBucket = "emails-show-prod.appspot.com";
} else if (environment === "master") {
  serviceAccount = require("../key/functions-admin-master.json");
  storageBucket = "emails-show-prod.appspot.com";
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
const getEnvironment = functions.https.onCall(async (data, context) => {
  return {environment};
});

export default getEnvironment;
