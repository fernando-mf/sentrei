import User from "@sentrei/common/models/User";

export default interface GlobalState {
  user: User.Get | null | undefined;
}
