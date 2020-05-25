/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

let serviceAccount: any;
let storageBucket = "";
const environment = process.env.GCLOUD_PROJECT;
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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket,
});

const getEnvironment = functions.https.onCall((data, context) => {
  return {environment};
});

export default getEnvironment;
