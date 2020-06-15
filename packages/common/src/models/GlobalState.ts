import Profile from "@sentrei/common/models/Profile";
import User from "@sentrei/common/models/User";

export default interface GlobalState {
  profile: Profile.Get | null;
  user: User.Get | null | undefined;
}
