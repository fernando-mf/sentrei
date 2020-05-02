import React from "react";
import Head from "next/head";
import {AppProps} from "next/app";
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "@sentrei/ui/containers/Theme";

export default function MyApp(props: AppProps): JSX.Element {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Sentrei</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MaterialThemeProvider theme={Theme}>
        <StyledThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
}
