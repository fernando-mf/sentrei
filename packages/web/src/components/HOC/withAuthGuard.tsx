/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import App from "next/app";
import * as React from "react";
import "firebase/auth";

// utils
import loginRedirect from "@sentrei/common/utils/auth/loginRedirect";

const withAuthGuard = (Component: any): any => {
  const WrappedComponent = (props: any): any => {
    if (!props.auth.user) return loginRedirect();
    if (props.auth.user) return <Component {...props} />;
  };

  WrappedComponent.getInitialProps = async (
    appContext: any,
  ): Promise<{
    pageProps: any;
  }> => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return {...appProps};
  };
  return WrappedComponent;
};

export default withAuthGuard;
