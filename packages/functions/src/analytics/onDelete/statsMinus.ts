import * as functions from "firebase-functions";

import {statsCollection} from "@sentrei/common/models/Analytics";

import statsUpdate from "../../helpers/statsUpdate";

/**
 * Decrease stat count to arbitrary collection
 */
const statsMinus = functions.firestore
  .document("{collection}/{doc}")
  .onDelete((snap, context) => {
    const {collection} = context.params;

    if (!statsCollection.includes(collection)) {
      return false;
    }

    return statsUpdate(collection, snap, -1);
  });

export default statsMinus;
