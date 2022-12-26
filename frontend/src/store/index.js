import { combineReducers } from "redux";
import loadingStore from "./src/loadingStore";

const rootReducer = combineReducers({
  loadingStore,
});
export default rootReducer;
