import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import NextApp from "next/app";
import Head from "next/head";
import React from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import * as Sentry from "@sentry/node";
import get from "lodash.get";

import "firebase/performance";
import Theme from "@sentrei/ui/containers/Theme";
import "@sentrei/web/utils/nprogress";
import firebaseConfig from "@sentrei/web/utils/firebaseConfig";
import "@sentrei/web/styles/global.scss";
import "@sentrei/web/styles/nprogress.scss";
import isBrowser from "@sentrei/web/utils/isBrowser";

export default class App extends NextApp {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
    firebase.initializeApp(firebaseConfig);
  }

  render(): JSX.Element {
    const {Component, pageProps} = this.props;
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
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </>
    );
  }
}
