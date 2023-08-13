import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./RootReducer.js";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const Store = createStore(RootReducer, undefined, composedEnhancers);