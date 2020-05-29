/* eslint-disable @typescript-eslint/no-explicit-any */
import App from "next/app";
import Router from "next/router";
import * as React from "react";

import "firebase/auth";
import Loader from "@sentrei/ui/components/Loader";

const withUserGuard = (Component: any): any => {
  const WrappedComponent = (props: any): any => {
    const {auth} = props;
    const {user} = auth;

    React.useEffect(() => {
      if (user) {
        Router.push("/dashboard");
      }
    });

    return <>{user ? <Loader /> : <Component {...props} />}</>;
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

export default withUserGuard;
