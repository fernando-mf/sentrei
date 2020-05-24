/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from "isomorphic-fetch";

const setSession = (user: firebase.User | null): any => {
  if (user) {
    return user.getIdToken().then((token: any) => {
      return fetch("/api/login", {
        method: "POST",
        // eslint-disable-next-line no-undef
        headers: new Headers({"Content-Type": "application/json"}),
        credentials: "same-origin",
        body: JSON.stringify({token}),
      });
    });
  }

  return fetch("/api/logout", {
    method: "POST",
    credentials: "same-origin",
  });
};

export default setSession;
