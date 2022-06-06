import { combineReducers } from "redux";
import Documents from "./documentReducer";

const reducers = combineReducers({
  documents: Documents,
});

export default reducers;
