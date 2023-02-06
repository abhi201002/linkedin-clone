import { combineReducers } from "redux";
import articleReducer from "./postreducer";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
    userState: reducer,
    articleState: articleReducer
})
