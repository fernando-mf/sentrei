import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as tools from "firebase-tools";

const db = admin.firestore();

const spaceDeleteNone = functions.firestore
  .document("spaces/{spaceId}/members/{userId}")
  .onDelete(async (_, context) => {
    const {spaceId} = context.params;
    const users = await db.collection(`spaces/${spaceId}/members`).get();
    if (users.empty) {
      tools.delete(`spaces/${spaceId}`, {
        project: process.env.GCLOUD_PROJECT,
        recursive: true,
        yes: true,
      });
    }
  });

export default spaceDeleteNone;
