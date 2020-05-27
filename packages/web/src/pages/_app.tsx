/* eslint-disable @typescript-eslint/no-explicit-any */
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import * as Sentry from "@sentry/browser";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import * as firebase from "firebase/app";
import get from "lodash.get";
import NextApp from "next/app";
import Head from "next/head";
import React, {ErrorInfo} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";

import {appWithTranslation} from "@sentrei/common/i18n";
import initFirebase from "@sentrei/common/utils/initFirebase";
import isBrowser from "@sentrei/common/utils/isBrowser";
import isDev from "@sentrei/common/utils/isDev";
import Loader from "@sentrei/ui/components/Loader";
import Theme from "@sentrei/ui/containers/Theme";
import AuthUserInfoContext from "@sentrei/ui/context/AuthUserInfoContext";
import withAuth from "@sentrei/web/components/HOC/withAuth";
import "firebase/auth";
import "firebase/analytics";
import "firebase/performance";

import "@sentrei/common/utils/nprogress";
import "@sentrei/common/utils/sentry";
import "@sentrei/web/styles/global.scss";
import "@sentrei/web/styles/nprogress.scss";

if (isBrowser() && isDev()) whyDidYouRender(React);

initFirebase();

class App extends NextApp<any, any> {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    if (isBrowser() && !firebase.apps.length) {
      firebase.analytics().logEvent("_app");
      firebase.performance().trace("_app");
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => scope.setExtra(key, errorInfo));
      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render(): JSX.Element {
    const {Component, pageProps, user} = this.props;
    const fileLabel = "pages/_app";

    Sentry.addBreadcrumb({
      // See https://docs.sentry.io/enriching-error-data/breadcrumbs
      category: fileLabel,
      message: `Rendering app for Component "${get(
        Component,
        "name",
        "unknown",
      )}" (${isBrowser() ? "browser" : "server"})`,
      level: Sentry.Severity.Debug,
    });

    return (
      <>
        <Head>
          <title>Sentrei</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <StyledThemeProvider theme={Theme}>
          <MaterialThemeProvider theme={Theme}>
            <CssBaseline />
            <AuthUserInfoContext.Provider value={{user}}>
              <Component {...pageProps} auth={{user}} />
            </AuthUserInfoContext.Provider>
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </>
    );
  }
}

export default withAuth(appWithTranslation(App));
