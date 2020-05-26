/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import Loader from "@sentrei/ui/components/Loader";
import useFirebaseAuth from "@sentrei/ui/hooks/useFirebaseAuth";

const withAuth = (Component: any) => {
  const WrappedComponent = (props: any) => {
    const {initializing, user} = useFirebaseAuth();

    // user not available yet
    if (initializing) return <Loader />;

    // user is available
    return <Component {...props} user={user} />;
  };

  return WrappedComponent;
};

export default withAuth;
