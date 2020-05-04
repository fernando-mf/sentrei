import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import NextApp from "next/app";
import Head from "next/head";
import React from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";

import "firebase/performance";
import Theme from "@sentrei/ui/containers/Theme";
import firebaseConfig from "@sentrei/web/utils/firebaseConfig";
import "@sentrei/web/styles/global.scss";

export default class App extends NextApp {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
    firebase.initializeApp(firebaseConfig);
  }

  render(): JSX.Element {
    const {Component, pageProps} = this.props;

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
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </>
    );
  }
}
