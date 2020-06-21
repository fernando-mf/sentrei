export type collection =
  | "profiles"
  | "notifications"
  | "rooms"
  | "spaces"
  | "users"
  | "usernames";

export const statsCollection: collection[] = [
  "profiles",
  "notifications",
  "rooms",
  "spaces",
  "users",
  "usernames",
];

declare namespace Analytics {
  export type Stats = {
    [x in collection]: FirebaseFirestore.FieldValue;
  };
}

export default Analytics;
