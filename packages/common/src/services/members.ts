import Member from "@sentrei/common/models/Member";
import serializeMember from "@sentrei/common/serializers/Member";
import {db, timestamp} from "@sentrei/common/utils/firebase";

const memberConverter: firebase.firestore.FirestoreDataConverter<Member.Get> = {
  toFirestore(data: Member.Get) {
    return data;
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot<Member.Response>,
  ): Member.Get {
    return serializeMember(snapshot);
  },
};

export const getMembers = async (
  collection: Member.Collections,
  doc: string,
  startAfter?: firebase.firestore.DocumentSnapshot,
  limit = 10,
): Promise<Member.Snapshot[]> => {
  let ref = db
    .collection(`${collection}/${doc}/members`)
    .withConverter(memberConverter)
    .limit(limit);

  if (startAfter) {
    ref = ref.startAfter(startAfter);
  }

  const snap = await ref.get();
  return snap.docs.map(item => {
    return {...item.data(), snap: item};
  });
};

export const follow = (
  collection: Member.Collections,
  id: string,
  userId: string,
): Promise<void> => {
  return db
    .doc(`${collection}/${id}/members/${userId}`)
    .set({joined: timestamp});
};

export const unfollow = (
  collection: Member.Collections,
  id: string,
  userId: string,
): Promise<void> => {
  return db.doc(`${collection}/${id}/members/${userId}`).delete();
};

export const getFollowStatus = (
  collection: Member.Collections,
  id: string,
  userId: string,
  onSnapshot: (joined: boolean) => void,
): firebase.Unsubscribe => {
  return db.doc(`${collection}/${id}/members/${userId}`).onSnapshot(snap => {
    onSnapshot(snap.exists);
  });
};
