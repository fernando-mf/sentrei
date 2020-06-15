/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Member from "@sentrei/common/models/Member";

import serializeFirebaseDate from "@sentrei/common/serializers/Date";

const serializeMember = (
  snap: firebase.firestore.DocumentSnapshot<Member.Response>,
): Member.Get => {
  const data = snap.data()!;

  return {
    ...data,
    joined: serializeFirebaseDate(data.joined),
  };
};

export default serializeMember;
