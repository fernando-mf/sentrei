/* eslint-disable @typescript-eslint/no-explicit-any */
import {createStore} from "easy-peasy";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import spaceModel from "@sentrei/common/models/spaceModel";
import userModel from "@sentrei/common/models/userModel";

const model = {
  user: <userModel>{
    isLoggedIn: false,
    auth: {},
  },
  space: <spaceModel>{
    items: {
      id: 1,
      name: "shun",
      admin: "kitsugi",
    },
  },
};

function initializeStore(initialState: any) {
  return createStore(model, {
    reducerEnhancer: reducer =>
      persistReducer(
        {
          key: "primary",
          storage,
        },
        reducer,
      ),
  });
}

export default initializeStore;
