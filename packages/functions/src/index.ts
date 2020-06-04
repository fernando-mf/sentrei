/* eslint-disable import/prefer-default-export */
/* eslint-disable import/first */
import * as admin from "firebase-admin";

admin.initializeApp();

import * as log from "./log";
import * as usernames from "./usernames";
import * as users from "./users";

const v1 = {log, usernames, users};

export {v1};
