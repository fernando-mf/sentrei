import User from "@sentrei/common/models/User";

export const userResponse: User.Response = {
  email: "user@sentrei.com",
  notificationCount: 0,
  notificationSettings: {chat: [], invitation: [], update: []},
  name: "user",
  role: "viewer",
  photo: null,
  username: "userId",
};

export const userResponseApp: User.Response = {
  ...userResponse,
  notificationSettings: {chat: ["app"], invitation: ["app"], update: ["app"]},
};

export const userResponseEmail: User.Response = {
  ...userResponse,
  notificationSettings: {
    chat: ["email"],
    invitation: ["email"],
    update: ["email"],
  },
};
