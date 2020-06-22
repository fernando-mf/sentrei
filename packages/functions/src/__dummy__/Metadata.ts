import Metadata from "@sentrei/common/models/Metadata";
import {profileGet} from "@sentrei/functions/__dummy__/Profile";

import {timestamp, timestampNow} from "../__mocks__/firebase-testing";

export const metadataUpdate: Metadata.Update = {
  updatedAt: timestamp,
  updatedBy: profileGet,
  updatedById: "userId",
};

export const metadataCreate: Metadata.Create = {
  ...metadataUpdate,
  createdAt: timestampNow,
  createdBy: profileGet,
  createdById: "userId",
};

export const metadataResponse: Metadata.Response = {
  ...metadataCreate,
  createdAt: timestamp,
  createdBy: profileGet,
  createdById: "userId",
  updatedAt: timestamp,
};
