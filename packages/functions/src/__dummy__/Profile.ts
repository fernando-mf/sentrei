import Profile from "@sentrei/common/models/Profile";

export const profileGet: Profile.Get = {
  id: "profile",
  name: "profileUser",
  username: "userId",
  photo: null,
};

export const profileResponse: Profile.Response = {
  name: "profileUser",
  username: "userId",
  photo: null,
};
