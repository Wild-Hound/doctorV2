import { createStore } from "redux";
import { Reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// @ts-ignore
export const store = createStore(Reducer, composeWithDevTools());
