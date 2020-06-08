/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Space from "@sentrei/common/models/Space";

// TODO: Change space to upper case
import serializeSpace from "@sentrei/common/serializers/space";
import {analytics, db, timestamp} from "@sentrei/common/utils/firebase";

import {generateRandomId, generateSlug} from "@sentrei/common/utils/generate";

const spaceConverter: firebase.firestore.FirestoreDataConverter<Space.Get> = {
  toFirestore(data: Space.Get) {
    return data;
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot<Space.Response>,
  ): Space.Get {
    return serializeSpace(snapshot);
  },
};

export const validateSpace = async (id: string): Promise<boolean> => {
  const space = await db.doc(`spaces/${id}`).get();
  return !space.exists;
};

export const createSpace = async (space: Space.Create): Promise<string> => {
  let id = generateSlug(space.name);
  const isValidSlug = await validateSpace(id);

  if (!isValidSlug) {
    id = `${id}-${generateRandomId()}`;
  }

  analytics().logEvent("space_create");
  await db.doc(`spaces/${id}`).set(space);
  return id;
};

export const updateSpace = (space: Space.Update, id: string): Promise<void> => {
  return db.doc(`spaces/${id}`).update(space);
};

export const deleteSpace = (id: string): Promise<void> => {
  analytics().logEvent("space_delete");
  return db.doc(`spaces/${id}`).delete();
};

export const getSpace = async (id: string): Promise<Space.Get> => {
  const snap = await db.doc(`spaces/${id}`).withConverter(spaceConverter).get();

  const data = snap.data();

  if (!data) {
    throw new Error("Space is not found");
  }

  return data;
};

export const getSpaceLive = (
  id: string,
  onSnapshot: (snap: Space.Get) => void,
): firebase.Unsubscribe => {
  return db
    .doc(`spaces/${id}`)
    .withConverter(spaceConverter)
    .onSnapshot(snap => {
      if (!snap.data()) throw new Error("Space is not found");
      onSnapshot(snap.data()!);
    });
};

export const listSpaces = async (
  startAfter?: firebase.firestore.DocumentSnapshot,
  userId?: string,
  limit = 12,
): Promise<Space.Snapshot[]> => {
  const collection = userId ? `users/${userId}/spaces` : "spaces";
  let ref = db
    .collection(collection)
    .withConverter(spaceConverter)
    .orderBy("updatedAt", "desc")
    .limit(limit);

  if (startAfter) {
    ref = ref.startAfter(startAfter);
  }

  const snap = await ref.get();
  return snap.docs.map(item => {
    return {...item.data(), snap: item};
  });
};
