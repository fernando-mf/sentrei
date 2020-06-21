import * as functions from "firebase-functions";

import {statsCollection} from "@sentrei/common/models/Analytics";

import statsUpdate from "../../helpers/statsUpdate";

/**
 * Increase stat count to arbitrary collection
 */

const statsPlus = functions.firestore
  .document("{collection}/{doc}")
  .onCreate((snap, context) => {
    const {collection} = context.params;

    if (!statsCollection.includes(collection)) {
      return false;
    }

    return statsUpdate(collection, snap, 1);
  });

export default statsPlus;
