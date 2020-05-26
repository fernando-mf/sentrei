/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "firebase/auth";

// utils
import loginRedirect from "@sentrei/common/utils/auth/loginRedirect";

const withAuthGuard = (Component: any) => {
  const WrappedComponent = (props: any) => {
    if (!props.auth.user) return loginRedirect();
    if (props.auth.user) return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuthGuard;
