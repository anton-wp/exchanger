import { combineReducers } from "redux";
import { exchangerReducer } from "./exchangerReducer";

export const rootReducer = combineReducers({
  exchanger: exchangerReducer,
})
