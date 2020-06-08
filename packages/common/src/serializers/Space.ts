/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Space from "@sentrei/common/models/Space";

import serializeFirebaseDate from "@sentrei/common/serializers/Date";

const serializeSpace = (
  snap: firebase.firestore.DocumentSnapshot<Space.Response>,
): Space.Get => {
  const data = snap.data()!;
  const {joined} = data;

  return {
    ...data,
    createdAt: serializeFirebaseDate(data.createdAt),
    id: snap.id,
    joined: joined ? serializeFirebaseDate(joined) : null,
    updatedAt: serializeFirebaseDate(data.updatedAt),
  };
};

export default serializeSpace;
