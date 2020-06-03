/* eslint-disable @typescript-eslint/no-explicit-any */
import {LinearProgress} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/core/styles";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import * as firebase from "firebase/app";
import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {appWithTranslation} from "@sentrei/common/i18n";
import User from "@sentrei/common/models/User";
import logIPAddress from "@sentrei/common/services/logIPAddress";
import {auth, analytics, db, performance} from "@sentrei/common/utils/firebase";
import ErrorBoundary from "@sentrei/ui/components/ErrorBoundary";
import Theme from "@sentrei/ui/containers/Theme";

import "@sentrei/common/utils/nprogress";
import "@sentrei/common/utils/sentry";
import "@sentrei/web/styles/global.scss";
import "@sentrei/web/styles/nprogress.scss";

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  const [user, setUser] = React.useState<firebase.User | null | undefined>(
    undefined,
  );
  const [userData, setUserData] = React.useState<User.Get | null | undefined>(
    undefined,
  );

  React.useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  React.useEffect(() => {
    let unsubscribe: firebase.Unsubscribe = () => {};

    if (user) {
      unsubscribe = db.doc(`users/${user.uid}`).onSnapshot(snap => {
        if (snap && snap.data()) {
          const firebaseUser = snap.data() as User.Response;

          setUserData({
            ...firebaseUser,
            email: user.email,
            uid: user.uid,
          });

          analytics().setUserProperties({
            emailVerified: user.emailVerified,
            role: firebaseUser.role,
          });
          analytics().setUserId(user.uid);
        }
      });
    }

    if (user === null) {
      setUserData(null);
    }

    return (): void => {
      unsubscribe();
    };
  }, [user]);

  React.useEffect(() => {
    if (user) {
      logIPAddress();
    }
  }, [user]);

  React.useEffect(() => {
    performance();
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
      <StyledThemeProvider theme={Theme}>
        <MaterialThemeProvider theme={Theme}>
          <CssBaseline />
          <GlobalContext.Provider
            value={{
              user: userData,
            }}
          >
            {user === undefined && <LinearProgress variant="query" />}
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </GlobalContext.Provider>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
