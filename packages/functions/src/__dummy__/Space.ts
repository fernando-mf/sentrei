import Space from "@sentrei/common/models/Space";

import {metadataCreate, metadataResponse, metadataUpdate} from "./Metadata";

export const spaceBase = {
  name: "space",
  photo: null,
  description: "space",
};

export const spaceCreate: Space.Create = {
  ...spaceBase,
  ...metadataCreate,
  memberCount: 0,
  createdById: "spaceUser",
  updatedById: "spaceUser",
};

export const spaceResponse: Space.Response = {
  ...spaceBase,
  ...metadataResponse,
  memberCount: 0,
  createdById: "spaceUser",
  updatedById: "spaceUser",
};

export const spaceUpdate: Space.Update = {
  ...spaceBase,
  ...metadataUpdate,
  updatedById: "spaceUser",
};
