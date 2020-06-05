import * as functions from "firebase-functions";

import collectionStats from "../../helpers/statsCollection";
import statsUpdate from "../../helpers/statsUpdate";

const statsMinus = functions.firestore
  .document("{collection}/{doc}")
  .onCreate((snap, context) => {
    const {collection} = context.params;

    if (!collectionStats.includes(collection)) {
      return false;
    }

    return statsUpdate(collection, snap, -1);
  });

export default statsMinus;
