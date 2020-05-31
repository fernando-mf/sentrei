/* eslint-disable import/first */
import * as admin from "firebase-admin";
import "module-alias/register";

admin.initializeApp();

import * as log from "./log";
import * as usernames from "./usernames";
import * as users from "./users";

const v1 = {log, usernames, users};

export default v1;
