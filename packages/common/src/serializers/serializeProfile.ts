import Profile from "@sentrei/common/models/Profile";

const serializeProfile = (
  snap: firebase.firestore.DocumentSnapshot<Profile.Response>,
): Profile.Get => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const data = snap.data()!;

  return {
    ...data,
    id: snap.id,
  };
};

export default serializeProfile;
