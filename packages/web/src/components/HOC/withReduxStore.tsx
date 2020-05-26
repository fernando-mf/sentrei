/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import initializeStore from "@sentrei/web/state/initializeStore";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

const getOrCreateStore = (initialState: any) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  // @ts-ignore
  if (!window[__NEXT_REDUX_STORE__]) {
    // @ts-ignore
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  // @ts-ignore
  return window[__NEXT_REDUX_STORE__];
};

export const withReduxStore = (App: any) => {
  return class AppWithRedux extends React.Component<any, any> {
    reduxStore = null;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export async function getStaticProps(appContext: any) {
  // Get or Create the store with `undefined` as initialState
  // This allows you to set a custom default initialState
  const reduxStore = getOrCreateStore(undefined);

  // Provide the store to props of pages
  // eslint-disable-next-line no-param-reassign
  appContext.ctx.reduxStore = reduxStore;

  return {
    initialReduxState: reduxStore.getState(),
  };
}
