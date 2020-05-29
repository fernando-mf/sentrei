/* eslint-disable @typescript-eslint/no-explicit-any */
import * as firebase from "firebase/app";

import "firebase/analytics";

export default function logEvent(
  eventName: string,
  eventParams?: {[key: string]: any},
): void {
  firebase.analytics().logEvent(eventName, eventParams);
}
