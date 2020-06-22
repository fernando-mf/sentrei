import Room from "@sentrei/common/models/Room";

import {metadataResponse} from "./Metadata";

// eslint-disable-next-line import/prefer-default-export
export const roomResponse: Room.Response = {
  ...metadataResponse,
  memberCount: 0,
  name: "room",
  photo: null,
  description: "room",
  createdById: "userId",
  updatedById: "userId",
  spaceId: "spaceId",
};
