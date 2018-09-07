import { combineReducers } from "redux";

import sample from "./sample/reducer/";

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    sample: sample,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
