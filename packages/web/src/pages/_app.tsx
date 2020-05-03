import React from "react";
import Head from "next/head";
import NextApp from "next/app";
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import Theme from "@sentrei/ui/containers/Theme";
import * as firebase from "firebase/app";
import "firebase/performance";
import firebaseConfig from "../utils/firebaseConfig";
import "../styles/global.scss";

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
